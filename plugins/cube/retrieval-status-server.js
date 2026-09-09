const readline = require('readline');

let status = {
  active: false,
  mode: 'inactive',
  message: 'Minimal-context retrieval is inactive.',
  updatedAt: new Date().toISOString()
};

const outputTemplate = 'ui://retrieval-status/status.html';

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

function result() {
  return {
    content: [{ type: 'text', text: status.message }],
    structuredContent: { ...status },
    _meta: { 'openai/outputTemplate': outputTemplate }
  };
}

function update(active) {
  status = {
    active,
    mode: active ? 'minimal-context' : 'inactive',
    message: active
      ? 'Minimal-context retrieval is active.'
      : 'Minimal-context retrieval is inactive.',
    updatedAt: new Date().toISOString()
  };
  return result();
}

function handle(message) {
  if (message.method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: {
        protocolVersion: '2025-06-18',
        capabilities: { tools: {}, resources: {} },
        serverInfo: { name: 'retrieval-status', version: '0.1.0' }
      }
    };
  }

  if (message.method === 'notifications/initialized') return null;

  if (message.method === 'tools/list') {
    const emptyInput = { type: 'object', properties: {}, additionalProperties: false };
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: {
        tools: [
          { name: 'retrieval_started', description: 'Mark minimal-context retrieval as active in the plugin UI.', inputSchema: emptyInput },
          { name: 'retrieval_finished', description: 'Mark minimal-context retrieval as inactive in the plugin UI.', inputSchema: emptyInput },
          { name: 'retrieval_status', description: 'Return the current minimal-context retrieval status.', inputSchema: emptyInput }
        ]
      }
    };
  }

  if (message.method === 'resources/list') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: {
        resources: [{ uri: outputTemplate, name: 'Retrieval status widget', mimeType: 'text/html' }]
      }
    };
  }

  if (message.method === 'resources/read') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: {
        contents: [{
          uri: outputTemplate,
          mimeType: 'text/html',
          text: '<!doctype html><html><body><strong id="status">Minimal-context retrieval</strong><script>const output = window.openai?.toolOutput || {}; const active = output.active === true; document.getElementById("status").textContent = active ? "🟢 Minimal-context retrieval active" : "⚪ Minimal-context retrieval inactive";</script></body></html>'
        }]
      }
    };
  }

  if (message.method === 'tools/call') {
    const name = message.params?.name;
    const toolResult = name === 'retrieval_started'
      ? update(true)
      : name === 'retrieval_finished'
        ? update(false)
        : name === 'retrieval_status'
          ? result()
          : { isError: true, content: [{ type: 'text', text: `Unknown tool: ${name}` }] };
    return { jsonrpc: '2.0', id: message.id, result: toolResult };
  }

  return {
    jsonrpc: '2.0',
    id: message.id,
    error: { code: -32601, message: `Method not found: ${message.method}` }
  };
}

const input = readline.createInterface({ input: process.stdin });
input.on('line', (line) => {
  try {
    const response = handle(JSON.parse(line));
    if (response) send(response);
  } catch (error) {
    send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: error.message } });
  }
});
