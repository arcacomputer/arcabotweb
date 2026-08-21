import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const pages = new Map([
  ['index.html', 'Arca | Agent studio, public software, and receipts'],
  ['farcaster-fork/index.html', 'Farcaster Fork / Hypersnap Token Explainer | Arca'],
  ['hypersnap-token-names/index.html', 'Hypersnap / Snap Token Naming Memo | Arca'],
]);

for (const [path, title] of pages) {
  const file = join(dist, path);
  assert.ok(existsSync(file), `${path} must be built`);
  const html = readFileSync(file, 'utf8');
  assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</title>`));
  assert.match(html, /<link rel="canonical" href="https:\/\/arcabot\.ai\/">/);
}

for (const asset of ['avatar.png', 'favicon.ico', '.well-known/agent-card.json', '.well-known/agent-registration.json', 'agent-metadata.json', '404.html', '_headers']) {
  assert.ok(existsSync(join(dist, asset)), `${asset} must be built`);
}

assert.equal(existsSync(join(dist, 'presale')), false, 'retired presale must not be published');
const cssFiles = readdirSync(join(dist, '_astro')).filter((name) => name.endsWith('.css'));
for (const css of cssFiles) assert.doesNotMatch(readFileSync(join(dist, '_astro', css), 'utf8'), /fonts\.googleapis\.com|@font-face/);

console.log('Built-site contract passed: 3 routes, required assets, fallback fonts, and no presale artifact.');
