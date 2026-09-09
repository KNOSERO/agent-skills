const readline = require('readline');

let status = {
  active: false,
  mode: 'inactive',
  message: 'Minimal-context retrieval is inactive.',
  updatedAt: new Date().toISOString()
};

const outputTemplate = 'ui://retrieval-status/status.html';
const outputHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      :root { color-scheme: light dark; }
      body {
        margin: 0;
        padding: 4px 0;
        font: 13px/1.35 system-ui, -apple-system, sans-serif;
      }
      .bubble {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        max-width: 100%;
        padding: 7px 11px;
        border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
        border-radius: 999px;
        background: color-mix(in srgb, currentColor 7%, transparent);
        color: color-mix(in srgb, currentColor 78%, transparent);
      }
      .dot {
        width: 8px;
        height: 8px;
        flex: 0 0 8px;
        border-radius: 50%;
        background: #8b949e;
      }
      .bubble.active { color: #16803c; background: #eaf8ef; border-color: #b7e3c3; }
      .bubble.active .dot { background: #20a34a; }
      @media (prefers-color-scheme: dark) {
        .bubble.active { color: #7ee2a0; background: #12321d; border-color: #285d39; }
      }
    </style>
  </head>
  <body>
    <div class="bubble" id="bubble" role="status" aria-live="polite">
      <span class="dot" aria-hidden="true"></span>
      <span id="status">Minimal-context retrieval inactive</span>
    </div>
    <script>
      const output = window.openai?.toolOutput || {};
      const active = output.active === true;
      document.getElementById('bubble').classList.toggle('active', active);
      document.getElementById('status').textContent = active
        ? 'token-efficient-retrieval active'
        : 'token-efficient-retrieval inactive';
    </script>
  </body>
</html>`;

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
          text: outputHtml
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
