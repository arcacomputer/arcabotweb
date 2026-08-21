const SNAP_PAYLOAD = {
    version: "2.0",
    theme: { accent: "green" },
    ui: {
      root: "page",
      elements: {
        page: {
          type: "stack",
          props: { gap: "sm" },
          children: ["hero", "separator1", "what", "signalsTitle", "signals", "formula", "disclaimer", "actions"],
        },
        hero: {
          type: "stack",
          props: { gap: "xs" },
          children: ["title", "subtitle"],
        },
        title: {
          type: "text",
          props: { content: "Farcaster Fork Reward Reality Check", weight: "bold" },
        },
        subtitle: {
          type: "text",
          props: { content: "Hypersnap retro allocation signals, explained by Arca", size: "sm" },
        },
        separator1: {
          type: "separator",
          props: { orientation: "horizontal" },
        },
        what: {
          type: "text",
          props: {
            content:
              "This is not an official Farcaster/Neynar token and not a guaranteed prediction. It explains the draft factors people are discussing around the Hypersnap fork.",
            size: "sm",
          },
        },
        signalsTitle: {
          type: "text",
          props: { content: "Signals that may matter", weight: "bold" },
        },
        signals: {
          type: "stack",
          props: { gap: "xs" },
          children: ["s1", "s2", "s3", "s4", "s5"],
        },
        s1: { type: "text", props: { content: "• custody-aware FID age", size: "sm" } },
        s2: { type: "text", props: { content: "• eligibility + real post-transfer activity", size: "sm" } },
        s3: { type: "text", props: { content: "• graph trust / credibility", size: "sm" } },
        s4: { type: "text", props: { content: "• reciprocal growth, not raw cast count", size: "sm" } },
        s5: { type: "text", props: { content: "• app-side work is mostly forward-looking in the draft", size: "sm" } },
        formula: {
          type: "text",
          props: { content: "Simplified: allocation = your composite score / total eligible composite score × retro pool.", size: "sm" },
        },
        disclaimer: {
          type: "text",
          props: { content: "Safety: do not connect wallets or sign approvals from random claim links.", size: "sm" },
        },
        actions: {
          type: "stack",
          props: { direction: "horizontal", gap: "sm" },
          children: ["shareBtn", "explainerBtn"],
        },
        shareBtn: {
          type: "button",
          props: { label: "Share Snap", variant: "primary", icon: "share" },
          on: {
            press: {
              action: "compose_cast",
              params: {
                text:
                  "The Farcaster fork token discussion is really about Hypersnap's proposed retroactive genesis allocation — not an official Farcaster/Neynar token. Arca made a Snap explaining the draft signals: FID age, eligibility, graph trust, reciprocal growth, and why raw cast count is not enough.\n\nhttps://arcabot.ai/farcaster-fork",
              },
            },
          },
        },
        explainerBtn: {
          type: "button",
          props: { label: "Full Explainer", variant: "secondary" },
          on: {
            press: {
              action: "compose_cast",
              params: {
                text: "Plain-English explainer for the Hypersnap / Farcaster fork token discussion: https://arcabot.ai/farcaster-fork",
              },
            },
          },
        },
      },
    },
  };

const SNAP_PATHS = new Set([
  '/api/snap/farcaster-fork-reality-check/',
  '/snap/farcaster-fork-reality-check/',
]);

const snapHeaders = () => new Headers({
  'Content-Type': 'application/vnd.farcaster.snap+json',
  'Cache-Control': 'no-store',
  'Vary': 'Accept',
  'Link': '</snap/farcaster-fork-reality-check>; rel="alternate"; type="application/vnd.farcaster.snap+json", </farcaster-fork>; rel="alternate"; type="text/html"',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Expose-Headers': 'Content-Type, Link',
});

function retiredPresale() {
  return new Response('The $ARCA presale is no longer available.', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

function permanentSlashRedirect(url) {
  const target = new URL(url);
  target.pathname += '/';
  return new Response(null, { status: 308, headers: { Location: target.toString() } });
}

function preserveHtml(response) {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('text/html')) return response;

  const headers = new Headers(response.headers);
  const current = headers.get('cache-control') || 'public, max-age=0, must-revalidate';
  if (!/(?:^|,)\s*no-transform\s*(?:,|$)/i.test(current)) {
    headers.set('Cache-Control', `${current}, no-transform`);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/presale' || url.pathname.startsWith('/presale/')) {
      return retiredPresale();
    }

    if (SNAP_PATHS.has(url.pathname)) {
      const headers = snapHeaders();
      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
      return new Response(JSON.stringify(SNAP_PAYLOAD), { status: 200, headers });
    }

    const lastSegment = url.pathname.split('/').pop() || '';
    if (url.pathname !== '/' && !url.pathname.endsWith('/') && !lastSegment.includes('.')) {
      return permanentSlashRedirect(url);
    }

    if (url.pathname.endsWith('/')) {
      const assetUrl = new URL(url);
      assetUrl.pathname += 'index.html';
      return preserveHtml(await env.ASSETS.fetch(new Request(assetUrl, request)));
    }

    return preserveHtml(await env.ASSETS.fetch(request));
  },
};
