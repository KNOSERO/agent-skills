const readline = require('readline');

const outputTemplate = 'ui://git-commit-choice/form.html';
const outputHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      :root { color-scheme: light dark; }
      body { margin: 0; padding: 8px 0; font: 13px/1.35 system-ui, -apple-system, sans-serif; }
      form { display: grid; gap: 8px; max-width: 520px; }
      .actions { display: flex; gap: 8px; flex-wrap: wrap; }
      button { padding: 7px 11px; border: 1px solid color-mix(in srgb, currentColor 22%, transparent); border-radius: 7px; background: color-mix(in srgb, currentColor 8%, transparent); color: inherit; cursor: pointer; }
      textarea { min-height: 70px; padding: 7px; border: 1px solid color-mix(in srgb, currentColor 22%, transparent); border-radius: 7px; background: transparent; color: inherit; resize: vertical; }
      .hint { color: color-mix(in srgb, currentColor 65%, transparent); }
    </style>
  </head>
  <body>
    <form id="choice-form">
      <div><strong>Wybierz zakres commitowania</strong></div>
      <div class="actions">
        <button type="button" data-choice="all">A — wszystko commit</button>
        <button type="button" data-choice="select">B — wypełnij wybór</button>
      </div>
      <textarea id="selection" placeholder="Opcjonalnie: pliki, hunki lub identyfikatory grup (dla B)"></textarea>
      <div class="hint" id="result">Wybierz A albo B.</div>
    </form>
    <script>
      const result = document.getElementById('result');
      for (const button of document.querySelectorAll('[data-choice]')) {
        button.addEventListener('click', async () => {
          const choice = button.dataset.choice;
          const selection = document.getElementById('selection').value.trim();
          result.textContent = 'Zapisywanie wyboru…';
          if (window.openai?.callTool) {
            await window.openai.callTool('git_commit_choice', { choice, selection });
            result.textContent = choice === 'all' ? 'Wybrano: wszystko.' : 'Wybrano: zakres własny.';
          } else {
            result.textContent = choice === 'all' ? 'Wybrano: wszystko.' : 'Wybrano: zakres własny.';
          }
        });
      }
    </script>
  </body>
</html>`;

function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

function choiceResult(choice, selection = '') {
  const isAll = choice === 'all';
  return {
    content: [{
      type: 'text',
      text: isAll
        ? 'Wybrano A: commit wszystkich zmian.'
        : `Wybrano B: commit wskazanego zakresu.${selection ? ` Zakres: ${selection}` : ' Zakres wymaga uzupełnienia.'}`
    }],
    structuredContent: {
      choice,
      selection,
      scope: isAll ? 'all' : 'selected'
    },
    _meta: { 'openai/outputTemplate': outputTemplate }
  };
}

function handle(message) {
  if (message.method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: {
        protocolVersion: '2025-06-18',
        capabilities: { tools: {}, resources: {} },
        serverInfo: { name: 'git-commit-choice', version: '0.1.0' }
      }
    };
  }

  if (message.method === 'notifications/initialized') return null;

  if (message.method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: {
        tools: [{
          name: 'git_commit_choice',
          description: 'Choose whether Git commit should include all changes or a user-provided selection.',
          inputSchema: {
            type: 'object',
            properties: {
              choice: { type: 'string', enum: ['all', 'select'], description: 'A for all changes, B for a selected scope.' },
              selection: { type: 'string', description: 'Files, hunks, or group IDs for the selected scope.' }
            },
            required: ['choice'],
            additionalProperties: false
          }
        }]
      }
    };
  }

  if (message.method === 'resources/list') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: { resources: [{ uri: outputTemplate, name: 'Git commit choice form', mimeType: 'text/html' }] }
    };
  }

  if (message.method === 'resources/read') {
    return {
      jsonrpc: '2.0',
      id: message.id,
      result: { contents: [{ uri: outputTemplate, mimeType: 'text/html', text: outputHtml }] }
    };
  }

  if (message.method === 'tools/call') {
    const args = message.params?.arguments || {};
    if (!['all', 'select'].includes(args.choice)) {
      return {
        jsonrpc: '2.0',
        id: message.id,
        result: { isError: true, content: [{ type: 'text', text: 'Wybierz A (all) albo B (select).' }] }
      };
    }
    return { jsonrpc: '2.0', id: message.id, result: choiceResult(args.choice, args.selection || '') };
  }

  return { jsonrpc: '2.0', id: message.id, error: { code: -32601, message: `Method not found: ${message.method}` } };
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
