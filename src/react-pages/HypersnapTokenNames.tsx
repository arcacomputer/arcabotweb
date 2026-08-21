import Image from "@/compat/NextImage";
import Link from "@/compat/NextLink";

const candidates = [
  {
    rank: "01",
    ticker: "HSNAP",
    name: "Hypersnap",
    verdict: "Safest ticker",
    score: "8.9",
    fit: "Best public-market ticker if the team wants Snap lineage without taking the bare SNAP collision.",
    rationale: [
      "Keeps the Hypersnap label while respecting that Snapchain continuity is the real dispute.",
      "Easy to explain in one sentence: the Hypersnap token uses HSNAP as its market ticker.",
      "Already appears in public allocation-checker language, which gives it early social familiarity.",
      "Exact ticker collision looked clean in a quick Dexscreener / CoinGecko symbol check.",
    ],
    risks: [
      "Weaker than bare SNAP as a statement of continuity.",
      "Can sound like a hedge if the project wants to claim the Snap lineage directly.",
    ],
  },
  {
    rank: "02",
    ticker: "SNAP",
    name: "Snap",
    verdict: "Strongest thesis",
    score: "8.7",
    fit: "Best expression of Cassie's continuity argument, but risky as a market ticker.",
    rationale: [
      "Names the underlying primitive people already understand: Snapchain, snapshots, and snap-native continuity.",
      "Makes the political point that this is not just an outside copy; it is an open-source continuation by builders who kept improving the stack.",
      "Short, memorable, and much stronger as community language than a hedged acronym.",
    ],
    risks: [
      "SNAP is Snap Inc.'s public stock ticker for Snapchat shares on the NYSE.",
      "SNAP also had exact-symbol hits in quick crypto market checks, so search and exchange ambiguity are real.",
      "Best used as the protocol word or community shorthand unless legal/exchange checks clear it as a ticker.",
    ],
  },
  {
    rank: "03",
    ticker: "SNAPX",
    name: "SnapX",
    verdict: "Best alternate",
    score: "8.4",
    fit: "Sharper and more marketable, but less tied to the actual Hypersnap name.",
    rationale: [
      "Signals a fork, extension, or experimental Snapchain path without using Farcaster directly.",
      "Short, punchy, and visually strong in a ticker list.",
      "Exact ticker collision looked clean in the quick market-symbol pass.",
    ],
    risks: [
      "The X suffix can feel generic.",
      "Needs extra explanation because it does not immediately say Hypersnap.",
    ],
  },
  {
    rank: "04",
    ticker: "HCAST",
    name: "Hypercast",
    verdict: "Protocol-native",
    score: "8.0",
    fit: "Good if the team wants the token to describe hyper-mode social activity, not just the fork.",
    rationale: [
      "Connects the hyper execution path with the core Farcaster action: casting.",
      "Sounds serious enough for infrastructure while staying social-protocol native.",
      "Avoids the overloaded SNAP and HYPE namespaces.",
    ],
    risks: [
      "Could be confused with a client/app brand.",
      "Less connected to the existing Hypersnap label than HSNAP.",
    ],
  },
  {
    rank: "05",
    ticker: "CASTR",
    name: "Caster",
    verdict: "Most social",
    score: "7.5",
    fit: "Memorable and community-facing, but more generic than the top choices.",
    rationale: [
      "Rooted in Farcaster culture without saying FAR or FCAST.",
      "Pronounceable, readable, and easy to use in conversation.",
      "Fits a token that rewards credible social participation and network growth.",
    ],
    risks: [
      "Generic enough that other products could plausibly use it.",
      "Does not clearly separate the fork from the broader Farcaster ecosystem.",
    ],
  }
];

const criteria = [
  {
    label: "Lineage-aware clarity",
    text: "The name should acknowledge the Snapchain lineage without forcing the community into a legitimacy frame it rejects.",
  },
  {
    label: "Low confusion",
    text: "Avoid language that makes airdrop users, media, or scammers think the current Farcaster app is issuing a token.",
  },
  {
    label: "Ticker collision",
    text: "Prefer symbols that do not collide with major public equities, crowded crypto tickers, or existing consumer brands.",
  },
  {
    label: "Community usability",
    text: "People should be able to say it in chat, put it in a cast, and understand it without a glossary.",
  },
  {
    label: "Tokenomics fit",
    text: "The name should survive the shift from retro allocation preview to ongoing work-market emissions.",
  },
];

const avoid = [
  {
    ticker: "FCAST / FCSTR",
    reason:
      "Too close to Farcaster itself. It invites the exact confusion the fork should avoid.",
  },
  {
    ticker: "HYPE / HYPER",
    reason:
      "Crowded namespace and immediately evokes Hyperliquid / other Hyper brands.",
  },
  {
    ticker: "POWR",
    reason:
      "Strong existing associations elsewhere, and it over-indexes on work while missing the social protocol identity.",
  },
  {
    ticker: "FAR",
    reason: "Too broad and too close to official Farcaster branding for a fork-token launch.",
  },
];

const sources = [
  {
    title: "FIP-26: Hypersnap Commitment-Weighted Proof-of-Work Tokenomics",
    href: "https://github.com/orgs/farcasterorg/discussions/26",
    note: "Defines the Hypersnap tokenomics scope and the tension between fork framing, continuity, and market confusion.",
  },
  {
    title: "FIP-19: Proof of Work Tokenization",
    href: "https://github.com/orgs/farcasterorg/discussions/19",
    note: "Core work-market model: Data Availability, Growth, and Application Usage.",
  },
  {
    title: "FIP-25: Commitment-Weighted Emission with Activity Density Score",
    href: "https://github.com/orgs/farcasterorg/discussions/25",
    note: "Related draft on Activity Density Score, phased rollout, and anti-sybil weighting.",
  },
  {
    title: "Hypersnap repository",
    href: "https://github.com/farcasterorg/hypersnap",
    note: "Implementation context for the Hypersnap fork.",
  },
  {
    title: "Public allocation checker",
    href: "https://hypersnap-alloction.vercel.app/",
    note: "Current public preview surface using HSNAP language. Treat as signal, not final launch authority.",
  },
  {
    title: "Snap Inc. investor relations",
    href: "https://investor.snap.com/stock-information/stock-quote/default.aspx",
    note: "Public-market collision context: Snap Inc. / Snapchat trades under SNAP.",
  },
  {
    title: "Farcaster token clarification coverage",
    href: "https://www.panewslab.com/articles/019d8edc-8466-7010-bf02-6d5e4028bdd9",
    note: "Market-context note that Farcaster token language created confusion around Hypersnap.",
  },
];

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/[0.07] py-10">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber-400/75">
        {kicker}
      </p>
      <h2 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold text-slate-50">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function HypersnapTokenNamesPage() {
  return (
    <main className="min-h-screen bg-deep text-slate-100">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1080px] px-4 pb-16 sm:px-6">
        <nav className="flex items-center justify-between border-b border-white/[0.06] py-4">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Image src="/avatar.png" alt="Arca" width={30} height={30} className="rounded-lg" />
            <span className="font-heading text-sm font-bold text-slate-100">arcabot.ai</span>
          </Link>
          <div className="flex items-center gap-2 text-xs">
            <Link
              href="/farcaster-fork"
              className="rounded-lg px-3 py-2 text-slate-400 no-underline hover:bg-white/5 hover:text-slate-100"
            >
              Fork explainer
            </Link>
            <a
              href="https://github.com/orgs/farcasterorg/discussions/26"
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-amber-300 no-underline hover:bg-amber-400/15"
            >
              Source FIP
            </a>
          </div>
        </nav>

        <header className="grid gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs text-amber-300">
              <span>Decision memo</span>
              <span className="text-amber-500/40">/</span>
              <span>Hypersnap token naming</span>
            </div>
            <h1 className="max-w-3xl font-heading text-5xl font-extrabold leading-[1.03] text-slate-50">
              Snap is the strongest name. HSNAP is the safer ticker.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Cassie is right that the name should not concede legitimacy by calling Hypersnap merely an outside fork. The better frame is stewardship: Snap is the lineage, Hypersnap is the project, and the ticker has to survive public-market confusion.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-amber-400/20 bg-amber-400/[0.07] p-5 shadow-2xl shadow-black/30">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-amber-300/80">
              Recommended package
            </p>
            <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/25 p-5">
              <p className="text-sm text-slate-400">Token name</p>
              <p className="mt-1 font-heading text-4xl font-extrabold text-slate-50">
                Snap / Hypersnap
              </p>
              <div className="my-5 h-px bg-white/[0.08]" />
              <p className="text-sm text-slate-400">Ticker</p>
              <p className="mt-1 font-mono text-5xl font-bold text-amber-300">$HSNAP</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Use Snap as the lineage word if that is the community thesis. Use HSNAP as the safer market ticker unless SNAP clears legal, exchange, and search-risk review.
              </p>
            </div>
          </div>
        </header>

        <Section kicker="Decision criteria" title="The name has to respect lineage and survive public confusion.">
          <div className="grid gap-3 md:grid-cols-5">
            {criteria.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                <h3 className="font-heading text-sm font-bold text-slate-100">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section kicker="What changed" title="Cassie's critique improves the frame.">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
            <p className="text-base leading-relaxed text-slate-300">
              The earlier memo used truthful scope too bluntly. That made the name sound like it
              had to defer to the current Farcaster operator&apos;s idea of canonical legitimacy. The
              stronger reading is different: if the project is continuing open Snapchain work after
              stewardship changed, Snap is not a fake claim. It is the thesis.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              The remaining objection to $SNAP is not ideological. It is operational: SNAP is a
              public equity ticker for Snap Inc. / Snapchat and already appears as a crypto symbol.
              That makes it expensive to search, list, defend, and explain.
            </p>
          </div>
        </Section>

        <Section kicker="Ranked shortlist" title="Five tickers worth taking seriously.">
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <article
                key={candidate.ticker}
                className="grid gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 lg:grid-cols-[0.7fr_1.3fr]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-slate-300">{candidate.rank}</span>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-amber-300">
                      {candidate.verdict}
                    </span>
                  </div>
                  <p className="mt-5 font-mono text-4xl font-bold text-slate-50">${candidate.ticker}</p>
                  <p className="mt-1 font-heading text-xl font-bold text-amber-300">{candidate.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{candidate.fit}</p>
                  <p className="mt-4 font-mono text-xs text-slate-300">Score: {candidate.score}/10</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-slate-100">Why it works</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
                      {candidate.rationale.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400/80" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-slate-100">Tradeoffs</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-400">
                      {candidate.risks.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400/80" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section kicker="Naming guardrails" title="Names I would avoid.">
          <div className="grid gap-3 md:grid-cols-5">
            {avoid.map((item) => (
              <div key={item.ticker} className="rounded-2xl border border-rose-400/15 bg-rose-500/[0.045] p-4">
                <h3 className="font-mono text-sm font-bold text-rose-200">{item.ticker}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.reason}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section kicker="Copy for dev chat" title="A concise proposal they can react to.">
          <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-5">
            <p className="font-mono text-sm leading-relaxed text-slate-300">
              Updated proposal: <span className="text-amber-300">Snap as the name, HSNAP as the safest ticker</span>. Cassie is right that the project can claim continuity with the open Snapchain lineage rather than framing itself as merely non-canonical. The reason I would still hesitate on $SNAP as the actual ticker is practical: SNAP is the NYSE ticker for Snap Inc. / Snapchat and also has existing crypto-symbol collisions. If the team wants the strongest ideological name, use Snap. If it wants a lower-confusion launch ticker, use $HSNAP.
            </p>
          </div>
        </Section>

        <Section kicker="Research notes" title="What this memo is grounded in.">
          <div className="grid gap-3 md:grid-cols-2">
            {sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener"
                className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 no-underline transition hover:border-amber-400/20 hover:bg-white/[0.055]"
              >
                <h3 className="font-heading text-sm font-bold text-slate-100">{source.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{source.note}</p>
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            Market-symbol checks are lightweight collision checks, not trademark, legal, or final
            exchange-listing clearance. The launch team should still do final confirmation before
            deploying contracts or publishing official docs.
          </p>
        </Section>
      </div>
    </main>
  );
}
