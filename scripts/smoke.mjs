import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const base = (process.env.SMOKE_BASE_URL || 'http://127.0.0.1:8787').replace(/\/$/, '');
const get = (path, init = {}) => fetch(base + path, { redirect: 'manual', ...init });

for (const path of ['/', '/farcaster-fork/', '/hypersnap-token-names/', '/favicon.ico', '/avatar.png', '/.well-known/agent-card.json']) {
  const response = await get(path);
  assert.equal(response.status, 200, `${path} must return 200`);
}

for (const path of ['/farcaster-fork', '/hypersnap-token-names', '/snap/farcaster-fork-reality-check', '/definitely-missing']) {
  const response = await get(path);
  assert.equal(response.status, 308, `${path} must return 308`);
  assert.equal(response.headers.get('location'), `${base}${path}/`);
}

for (const path of ['/presale', '/presale/']) {
  const response = await get(path);
  assert.equal(response.status, 410, `${path} must return 410`);
  assert.match(await response.text(), /no longer available/i);
}

for (const [method, status] of [['GET', 200], ['POST', 200], ['OPTIONS', 204]]) {
  const response = await get('/api/snap/farcaster-fork-reality-check/', { method });
  assert.equal(response.status, status);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('access-control-allow-origin'), '*');
  if (method !== 'OPTIONS') {
    const body = await response.text();
    assert.equal(response.headers.get('content-type'), 'application/vnd.farcaster.snap+json');
    assert.equal(createHash('sha256').update(body).digest('hex'), '1cf6a0bd0f312c4f6550f40f96a05d155f935af0ac9d28e51b6d5f03b4f46caa');
  }
}

const snap = await get('/snap/farcaster-fork-reality-check/');
assert.equal(snap.status, 200);
assert.equal(snap.headers.get('content-type'), 'application/vnd.farcaster.snap+json');

const missing = await get('/definitely-missing/');
assert.equal(missing.status, 404);
assert.match(await missing.text(), /This page could not be found/);

const root = await get('/');
for (const header of ['strict-transport-security', 'x-content-type-options', 'content-security-policy', 'referrer-policy', 'permissions-policy']) {
  assert.ok(root.headers.get(header), `${header} must be present`);
}

console.log(`Runtime smoke passed at ${base}: pages, redirects, Snap API, 410 presale, true 404, and headers.`);
