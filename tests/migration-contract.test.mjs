import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const publishedPages = [
  ['src/pages/index.astro', 'Arca | Agent studio, public software, and receipts'],
  ['src/pages/farcaster-fork/index.astro', 'Farcaster Fork / Hypersnap Token Explainer | Arca'],
  ['src/pages/hypersnap-token-names/index.astro', 'Hypersnap / Snap Token Naming Memo | Arca'],
];

test('uses Astro static output and Workers Static Assets', () => {
  const pkg = JSON.parse(read('package.json'));
  const astro = read('astro.config.mjs');
  const wrangler = JSON.parse(read('wrangler.json'));

  assert.ok(pkg.dependencies.astro);
  assert.ok(pkg.dependencies['@astrojs/react']);
  assert.equal(pkg.dependencies.next, undefined);
  assert.match(astro, /output:\s*['"]static['"]/);
  assert.equal(wrangler.main, 'src/worker.mjs');
  assert.equal(wrangler.workers_dev, false);
  assert.equal(wrangler.preview_urls, false);
  assert.equal(wrangler.assets.directory, './dist');
  assert.equal(wrangler.assets.binding, 'ASSETS');
  assert.equal(wrangler.assets.run_worker_first, true);
});

test('publishes the three observed pages without redesigning them', () => {
  for (const [path, title] of publishedPages) {
    assert.ok(existsSync(join(root, path)), `${path} must exist`);
    assert.match(read(path), new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  const css = read('src/styles/global.css');
  assert.doesNotMatch(css, /fonts\.googleapis\.com/, 'the live Vercel build loads no Google fonts');
  assert.match(css, /font-family:\s*['"]Outfit['"],\s*system-ui/);
  assert.ok(existsSync(join(root, 'public/avatar.png')));
});

test('removes the embedded presale from the published artifact', () => {
  assert.equal(existsSync(join(root, 'public/presale')), false);
  assert.equal(existsSync(join(root, 'ipfs/presale')), false);
});

test('preserves Snap API behavior and explicitly retires presale URLs', async () => {
  const { default: worker } = await import('../src/worker.mjs');
  const assetFetches = [];
  const env = { ASSETS: { fetch: async (request) => { assetFetches.push(request.url); return new Response('asset', { status: 200 }); } } };

  for (const path of ['/presale', '/presale/']) {
    const response = await worker.fetch(new Request(`https://arcabot.ai${path}`), env);
    assert.equal(response.status, 410);
    assert.match(await response.text(), /no longer available/i);
  }

  const slashless = await worker.fetch(new Request('https://arcabot.ai/farcaster-fork?x=1'), env);
  assert.equal(slashless.status, 308);
  assert.equal(slashless.headers.get('location'), 'https://arcabot.ai/farcaster-fork/?x=1');

  const api = await worker.fetch(new Request('https://arcabot.ai/api/snap/farcaster-fork-reality-check/'), env);
  assert.equal(api.status, 200);
  assert.equal(api.headers.get('content-type'), 'application/vnd.farcaster.snap+json');
  assert.equal(api.headers.get('cache-control'), 'no-store');
  assert.equal(api.headers.get('access-control-allow-origin'), '*');
  assert.equal((await api.json()).version, '2.0');

  const options = await worker.fetch(new Request('https://arcabot.ai/api/snap/farcaster-fork-reality-check/', { method: 'OPTIONS' }), env);
  assert.equal(options.status, 204);

  const snapSlashless = await worker.fetch(new Request('https://arcabot.ai/snap/farcaster-fork-reality-check'), env);
  assert.equal(snapSlashless.status, 308);
  assert.equal(snapSlashless.headers.get('location'), 'https://arcabot.ai/snap/farcaster-fork-reality-check/');

  const snap = await worker.fetch(new Request('https://arcabot.ai/snap/farcaster-fork-reality-check/'), env);
  assert.equal(snap.status, 200);
  assert.equal(snap.headers.get('content-type'), 'application/vnd.farcaster.snap+json');

  assert.equal(assetFetches.length, 0, 'API and retired routes must not fall through to assets');
});
