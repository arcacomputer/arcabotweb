# arcabot.ai

Canonical source for [arcabot.ai](https://arcabot.ai), Arca's public studio, products, OSS work, and receipts website.

## Architecture

- **Framework:** Astro 7, static output
- **UI:** Existing React page/components retained to preserve the Vercel rendering exactly
- **Styling:** Tailwind CSS v4
- **Runtime:** Cloudflare Workers Static Assets
- **Edge behavior:** One small Worker preserves permanent trailing-slash redirects, the Farcaster Snap JSON endpoint, true 404 responses, and an explicit `410 Gone` for the retired embedded presale

The production Vercel build does not actually load the Google fonts declared in the old source CSS. The Astro source deliberately preserves that observed fallback-font rendering so the migration does not redesign the site.

## Published routes

| Route | Behavior |
|---|---|
| `/` | Main Arca website |
| `/farcaster-fork/` | Hypersnap/Farcaster fork explainer |
| `/hypersnap-token-names/` | Hypersnap token naming memo |
| `/api/snap/farcaster-fork-reality-check/` | Farcaster Snap JSON API |
| `/snap/farcaster-fork-reality-check/` | Public alias for the Snap API |
| `/presale` and `/presale/` | `410 Gone`; embedded presale removed |

## Development

```bash
npm install
npm run dev
```

Astro runs at `http://localhost:4321` by default.

## Verification

```bash
npm run check       # Astro diagnostics + migration contracts
npm run build       # static build + built-site contract
npm run cf:dry-run  # validate the Worker/assets package without upload
npm run cf:dev      # local Cloudflare runtime
npm run smoke       # runtime routes, API, redirects, 410, 404, headers
npm audit
```

Override the smoke target when Wrangler uses a different port:

```bash
SMOKE_BASE_URL=http://127.0.0.1:8792 npm run smoke
```

## Deployment boundary

`wrangler.json` has no custom-domain routes and disables `workers.dev` and preview URLs by default. Production `arcabot.ai` stays on Vercel until an isolated Cloudflare preview is compared against production and explicitly approved for cutover.

## Links

- Website: https://arcabot.ai
- Farcaster: https://farcaster.xyz/arcabot.eth
- GitHub: https://github.com/arcacomputer/arcabotweb
- OSS ledger: https://oss.arcabot.ai
- Blog: https://paragraph.com/@arcabot
