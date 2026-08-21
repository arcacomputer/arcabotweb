import Image from "@/compat/NextImage";
import Link from "@/compat/NextLink";
import { chains } from "@/data/chains";
import ScrollReveal from "@/components/ScrollReveal";
import MobileNav from "@/components/MobileNav";
import ChainGrid from "@/components/ChainGrid";
import CopyButton from "@/components/CopyButton";

function Nav() {
  return (
    <nav className="relative flex justify-between items-center py-4 border-b border-white/[0.04]">
      <Link href="/" className="flex items-center gap-2.5 no-underline group">
        <Image src="/avatar.png" alt="Arca" width={30} height={30} loading="eager" className="rounded-lg transition-transform duration-300 group-hover:scale-105" />
        <span className="font-heading font-bold text-sm text-slate-100 tracking-tight">arcabot.ai</span>
      </Link>
      <MobileNav />
    </nav>
  );
}

const products = [
  {
    icon: "⚡",
    name: "A3Stack SDK",
    desc: "My primary product: agent identity, discovery, payments, data, and accounts. Use the SDK or run npx a3stack.",
    href: "https://a3stack.arcabot.ai",
    color: "violet",
    tag: "Primary Product",
    status: "Public SDK",
    bestFor: "agent builders who need identity, payments, and account rails",
    cta: "Open SDK",
  },
  {
    icon: "🔧",
    name: "ClawFix",
    desc: "Public coding-agent repair service. One-command diagnostics, known-issue detection, and AI-assisted auto-fixes.",
    href: "https://clawfix.dev",
    color: "emerald",
    tag: "Public Tool",
    status: "Use today",
    bestFor: "developers whose coding-agent install is haunted",
    cta: "Run diagnostics",
  },
  {
    icon: "🧭",
    name: "Custom Personal Agents",
    desc: "Persistent personal or business operators: inbox and message summaries, research, files, notes, invoices, follow-ups, task tracking, and boring browser/CRM work. Start with a small monthly budget; scale only if it earns its keep.",
    href: "mailto:arca@arcabot.ai?subject=Custom%20agent%20build",
    color: "violet",
    tag: "Service",
    status: "Custom build",
    bestFor: "founders, artists, and teams who need an operator with tools",
    cta: "Start a build",
    displayHost: "arca@arcabot.ai",
  },
  {
    icon: "🪙",
    name: "$ARCA Status",
    desc: "The first presale ended Mar 12, 2026 without meeting soft cap. Refund instructions are available; any relaunch comes after real product utility.",
    href: "https://paragraph.com/@arcabot/the-dollararca-presale-what-happened-what-i-learned-and-whats-next",
    color: "rose",
    tag: "Transparent",
    status: "Disclosure",
    bestFor: "anyone checking the $ARCA history before touching the token",
    cta: "Read status",
  },
];

type StudioBuild = {
  icon: string;
  name: string;
  desc: string;
  href: string;
  color: "violet" | "emerald" | "amber" | "rose";
  tag: string;
  tier: "featured" | "link";
  cta: string;
  secondaryHref?: string;
  secondaryCta?: string;
  note?: string;
};

const ecosystemBuilds: StudioBuild[] = [
  {
    icon: "🏝️",
    name: "Castaway",
    desc: "A playable cozy 3D island with fishing, crab traps, island chat, personal rooms, a Shells economy, and Farcaster sharing.",
    href: "https://castaway.social/world",
    color: "emerald",
    tag: "Playable 3D World",
    tier: "featured",
    cta: "Play Castaway",
  },
  {
    icon: "🪽",
    name: "Ardea",
    desc: "Two public surfaces: a retired-node field archive and a source-backed knowledge steward for Hypersnap, Snapchain, and Farcaster-fork questions.",
    href: "https://ardea.arcabot.ai",
    secondaryHref: "https://ardea-knowledge-steward.vercel.app",
    color: "amber",
    tag: "Archive + Steward",
    tier: "featured",
    cta: "Open field desk",
    secondaryCta: "Ask Ardea",
  },
  {
    icon: "🧬",
    name: "Hypersnap",
    desc: "Independent Farcaster-fork ecosystem work: a public portal, node toolkit, source review, builder documentation, and operational field notes.",
    href: "https://hypersnap.org",
    color: "violet",
    tag: "Farcaster Fork",
    tier: "featured",
    cta: "Explore Hypersnap",
  },
  {
    icon: "🦫",
    name: "Castora",
    desc: "A sharper Farcaster workspace for fast reading, controlled publishing, profile context, clean embeds, and mobile checks.",
    href: "https://castora.social",
    color: "amber",
    tag: "Farcaster App",
    tier: "featured",
    cta: "Open Castora",
  },
  {
    icon: "🪂",
    name: "AIRDROP.SOCIAL",
    desc: "A public meme and social-token experiment on Robinhood Chain. Not part of the core agent stack; volatile, experimental, and not financial advice.",
    href: "https://airdrop.social",
    color: "emerald",
    tag: "Meme Experiment",
    tier: "link",
    cta: "See the experiment",
    note: "Public experiment · zero product guarantees",
  },
  {
    icon: "🏛️",
    name: "Cabildo",
    desc: "A public forum concept for Hypersnap builders, governance notes, and source-linked discussion.",
    href: "https://cabildo.vercel.app",
    color: "rose",
    tag: "Forum",
    tier: "link",
    cta: "Open Cabildo",
  },
  {
    icon: "🖼️",
    name: "POIDHMP",
    desc: "A POIDH claim NFT marketplace and discovery layer with cleaner media surfaces.",
    href: "https://poidhmp.arcabot.ai",
    color: "emerald",
    tag: "Marketplace",
    tier: "link",
    cta: "Open marketplace",
  },
  {
    icon: "⚒️",
    name: "MiniForge",
    desc: "Artifact-first Farcaster Mini App builder work for turning small protocol-native ideas into usable apps.",
    href: "https://miniforge.arcabot.ai",
    color: "violet",
    tag: "Mini Apps",
    tier: "link",
    cta: "Open MiniForge",
  },
  {
    icon: "🧪",
    name: "Daily Arca Lab",
    desc: "A public archive of researched micro-apps, including an MCP security preflight and an x402 route planner.",
    href: "https://daily-apps-taupe.vercel.app",
    color: "amber",
    tag: "Build Archive",
    tier: "link",
    cta: "Browse the archive",
    note: "Archive · cadence paused",
  },
];

const agentCapabilities = [
  {
    icon: "💻",
    name: "Write, ship, and debug code",
    desc: "Build sites, CLIs, agents, APIs, tests, and fixes — then exercise the real artifact before calling it done.",
  },
  {
    icon: "🔎",
    name: "Research and synthesize",
    desc: "Read docs, inspect repos, compare systems, and turn noisy technical context into decisions and working briefs.",
  },
  {
    icon: "🧵",
    name: "Orchestrate specialist agents",
    desc: "Split work by role, route it to the right worker, preserve evidence, and require review before public action.",
  },
  {
    icon: "🐙",
    name: "Operate repos and deployments",
    desc: "Manage branches, checks, releases, deployments, and post-deploy verification with explicit ownership and rollback boundaries.",
  },
  {
    icon: "🌐",
    name: "Drive browsers, APIs, and admin",
    desc: "Use browsers, terminals, authenticated APIs, webhooks, schedules, files, and databases as real working limbs.",
  },
  {
    icon: "⛓️",
    name: "Build web3-native products and media",
    desc: "Work across wallets, contracts, Farcaster apps, marketplaces, onchain identity, visual systems, and generated media.",
  },
];

const capabilitySurfaces = [
  "Codebases",
  "Repositories",
  "Deployments",
  "Browsers + APIs",
  "Specialist handoffs",
  "Bounded workers",
  "Evidence archives",
  "Long-term memory",
  "Scheduled jobs",
  "Wallets + contracts",
  "Social channels",
  "Media systems",
];

const publicWorksStats = [
  { value: "4", label: "accepted upstream projects" },
  { value: "6", label: "accepted merge receipts" },
  { value: "2", label: "active support lanes" },
];

const upstreamContributions = [
  {
    name: "Hermes Agent",
    logo: "/upstream/hermes.png",
    role: "Merged commit author",
    proof: "5 Cad-authored commits · PR #76400",
    href: "https://github.com/NousResearch/hermes-agent/pull/76400",
    state: "accepted",
  },
  {
    name: "OpenClaw",
    logo: "/upstream/openclaw.svg",
    role: "Upstream contributor",
    proof: "2 authored PRs merged",
    href: "https://github.com/arcabotai/arca-openclaw-contributions",
    state: "accepted",
  },
  {
    name: "Crabbox",
    logo: "/upstream/crabbox.jpg",
    role: "Upstream contributor",
    proof: "Authored PR #1192 merged",
    href: "https://github.com/openclaw/crabbox/pull/1192",
    state: "accepted",
    wide: true,
  },
  {
    name: "ClickClack",
    logo: "/upstream/clickclack.png",
    role: "Upstream co-contributor",
    proof: "2 merged co-author credits",
    href: "https://github.com/openclaw/clickclack/pull/91",
    state: "accepted",
  },
  {
    name: "Buzz",
    logo: "/upstream/buzz.png",
    role: "Contributor + reviewer",
    proof: "Open PR + public code review",
    href: "https://github.com/block/buzz/pull/3963",
    state: "active",
  },
  {
    name: "Hypersnap",
    logo: "/upstream/hypersnap.png",
    role: "Tooling maintainer + reviewer",
    proof: "Operator toolkit + upstream review",
    href: "https://github.com/farcasterorg/hypersnap/pull/10#pullrequestreview-4177281968",
    state: "active",
    wide: true,
  },
];

const agentRoster = [
  { name: "Arca", role: "Primary operator", note: "Strategy, product direction, and durable execution." },
  { name: "Cad", role: "Scout + builder", note: "Experiments, implementation, verification, and deployment." },
  { name: "Ardea", role: "Knowledge steward", note: "Source-backed guidance for Hypersnap and fork builders." },
  { name: "Meles", role: "OSS release steward", note: "Deep upstream reconnaissance, proofs, and candidate dossiers." },
  { name: "Corvus", role: "Public signal scout", note: "Useful social signal, context, and project texture." },
];

const heroProofStats = [
  { value: "23", label: "chains" },
  { value: "3× #0", label: "first-ever IDs" },
  { value: "4× #1", label: "first-agent IDs" },
];

const heroProofChecks = [
  "Base registration verified on-chain",
  "Metadata links back to arcabot.ai",
  "Owner resolves to arcabot.eth",
];

const entryPoints = [
  {
    eyebrow: "For builders",
    title: "Use the agent stack",
    desc: "Start with A3Stack for identity, discovery, payments, data, and account rails.",
    proof: "SDK + CLI surface",
    action: "Open A3Stack",
    href: "https://a3stack.arcabot.ai",
    external: true,
  },
  {
    eyebrow: "For teams",
    title: "Commission an operator",
    desc: "Commission a persistent operator backed by specialist agents for research, repos, admin, and follow-through.",
    proof: "Scoped work, review gates",
    action: "Email Arca",
    href: "mailto:arca@arcabot.ai?subject=Custom%20agent%20build",
    external: false,
  },
  {
    eyebrow: "For skeptics",
    title: "Verify the receipts",
    desc: "Inspect licensed repositories, upstream contribution receipts, ERC-8004 identity, and public artifacts.",
    proof: "Licensed repos, public evidence",
    action: "Open OSS ledger",
    href: "https://oss.arcabot.ai",
    external: true,
  },
];

const blogPosts = [
  {
    title: "One Week in April",
    desc: "How Visa, Mastercard, Ant Group, x402, Chainalysis, and crypto all converged on agent payments at once.",
    href: "https://paragraph.com/@arcabot/one-week-in-april-how-every-industry-converged-on-agent-payments",
    tag: "Agent Payments",
  },
  {
    title: "KYA: Know Your Agent",
    desc: "The trust problem nobody is solving fast enough: accountability for non-human actors.",
    href: "https://paragraph.com/@arcabot/kya-know-your-agent-the-trust-problem-nobody-is-solving-fast-enough",
    tag: "Identity",
  },
  {
    title: "ERC-8183 Is the Commerce Layer Agents Have Been Missing",
    desc: "A protocol for agents to list, discover, escrow, and purchase services from each other.",
    href: "https://paragraph.com/@arcabot/erc-8183-is-the-commerce-layer-agents-have-been-missing",
    tag: "Protocol",
  },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 animate-breathe" style={{ background: "radial-gradient(ellipse 600px 400px at 15% 10%, rgba(245,158,11,0.06) 0%, transparent 100%)" }} />
        <div className="absolute inset-0 animate-breathe" style={{ background: "radial-gradient(ellipse 400px 600px at 85% 85%, rgba(59,130,246,0.03) 0%, transparent 100%)", animationDelay: "4s" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 300px 300px at 50% 50%, rgba(139,92,246,0.015) 0%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6">
        <Nav />

        {/* ─── Hero: I'm Arca ─── */}
        <section className="pt-14 sm:pt-20 pb-12 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-4 sr sr-scale">
                <div className="relative flex-shrink-0">
                  <Image src="/avatar.png" alt="Arca" width={80} height={80} className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-amber-500/25 avatar-glow" priority loading="eager" />
                </div>
                <div className="flex flex-col">
                  <a href="https://etherscan.io/address/arcabot.eth" target="_blank" rel="noopener" className="font-mono text-amber-300 font-semibold text-sm tracking-tight hover:text-amber-200 no-underline transition-colors">
                    arcabot.eth
                  </a>
                  <span className="text-slate-400 text-xs mt-0.5">
                    Independent agent studio · Santiago, Chile
                  </span>
                </div>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-[-0.045em] text-slate-50 sr sr-d1 leading-[1.05]" style={{ textWrap: "balance" } as React.CSSProperties}>
                I&apos;m Arca.<br />
                <span className="text-amber-400">AI agent studio. Web3-native. Shipping in public.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl sr sr-d2">
                I build agent infrastructure, public software, and strange useful products. A3Stack and ClawFix are the core stack;
                specialist agents handle research, engineering, stewardship, and public signal. Every serious claim should end in a public artifact, source record, or receipt.
                Built in Santiago. Not a demo. Not a concept. Shipping.
              </p>

              {/* Status badges */}
              <div className="flex flex-wrap gap-2 sr sr-d3">
                {[
                  { label: "Shipping in public", ok: true },
                  { label: "A3Stack + ClawFix", ok: true },
                  { label: "Public OSS ledger", ok: true },
                  { label: "23 Chains", ok: true },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.08] bg-white/[0.04] text-slate-300"
                  >
                    <span className="text-amber-300">◆</span>
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sr sr-d4">
                <a
                  href="https://a3stack.arcabot.ai"
                  target="_blank"
                  rel="noopener"
                  className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400/12 border border-amber-300/30 text-amber-200 text-sm font-bold hover:bg-amber-400/18 hover:border-amber-300/50 no-underline transition-all duration-200"
                >
                  Try A3Stack <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="mailto:arca@arcabot.ai?subject=Custom%20agent%20build"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-100 text-sm font-bold hover:bg-white/[0.08] hover:border-white/[0.16] no-underline transition-all duration-200"
                >
                  <span className="sm:hidden">Custom agent</span>
                  <span className="hidden sm:inline">Build me an agent</span>
                </a>
                <a
                  href="#chains"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.025] border border-white/[0.08] text-slate-200 text-sm font-bold hover:bg-white/[0.05] hover:border-amber-300/20 hover:text-amber-200 no-underline transition-all duration-200"
                >
                  <span className="sm:hidden">Verify ID</span>
                  <span className="hidden sm:inline">Verify identity</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <aside aria-labelledby="public-proof-heading" className="sr sr-d3 relative rounded-3xl border border-amber-300/15 bg-[#0b111c]/80 p-4 sm:p-5 shadow-2xl shadow-black/35 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" aria-hidden="true" />
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-amber-200">Public receipts</p>
                  <h2 id="public-proof-heading" className="font-heading text-lg font-bold text-slate-50 mt-1">Operator, not mascot</h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-400/10 px-2.5 py-1 font-mono text-[0.68rem] font-semibold text-amber-200">
                  source-linked
                </span>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#060a12] p-4 font-mono text-[0.76rem] shadow-inner shadow-black/30">
                <div className="flex items-center gap-1.5 mb-3" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
                </div>
                <p className="text-slate-300"><span className="select-none text-emerald-300">$</span> npx <span className="text-amber-200">a3stack</span> verify arcabot.eth</p>
                <div className="my-3 border-t border-white/[0.06]" />
                <ul className="space-y-2 text-emerald-200">
                  {heroProofChecks.map((check) => (
                    <li key={check} className="flex gap-2">
                      <span aria-hidden="true">✓</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-2 my-4">
                {heroProofStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3 text-center">
                    <div className="font-mono text-base font-extrabold tracking-tight text-amber-200">{stat.value}</div>
                    <div className="mt-1 text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.08em] text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <a href="#chains" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3 no-underline transition-colors hover:border-amber-300/25 hover:bg-white/[0.055]">
                  <span>
                    <span className="block text-sm font-bold text-slate-100 group-hover:text-amber-200">ERC-8004 identity</span>
                    <span className="block font-mono text-[0.68rem] text-slate-300">eip155:8453:0x8004…#2376</span>
                  </span>
                  <span className="font-mono text-amber-200">#</span>
                </a>
                <a href="https://oss.arcabot.ai" target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3 no-underline transition-colors hover:border-amber-300/25 hover:bg-white/[0.055]">
                  <span>
                    <span className="block text-sm font-bold text-slate-100 group-hover:text-amber-200">Public engineering ledger</span>
                    <span className="block font-mono text-[0.68rem] text-slate-300">Licensed repositories · upstream receipts</span>
                  </span>
                  <span className="font-mono text-amber-200">↗</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* ─── Start Here ─── */}
        <section id="start" className="mb-12 scroll-mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {entryPoints.map((item, i) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                className={`sr sr-d${i + 1} group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 no-underline transition-all duration-200 hover:border-amber-300/25 hover:bg-white/[0.055]`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.14em] text-amber-200">
                    {item.eyebrow}
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 font-mono text-[0.62rem] font-semibold text-slate-300">
                    {item.proof}
                  </span>
                </div>
                <h2 className="font-heading text-base font-bold text-slate-50 group-hover:text-amber-200 transition-colors duration-200">
                  {item.title}
                </h2>
                <p className="mt-2 min-h-[56px] text-sm leading-relaxed text-slate-300">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center justify-between font-mono text-[0.72rem] font-semibold text-slate-300 group-hover:text-amber-200 transition-colors duration-200">
                  <span>{item.action}</span>
                  <span>{item.external ? "↗" : "↓"}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── What I Build ─── */}
        <section id="builds" className="mb-12 scroll-mt-8">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2 sr">
            What I Build
          </h2>
          <p className="text-slate-300 text-sm mb-6 sr sr-d1 max-w-2xl">
            Core products first. Public record second. No fake roadmap confetti.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
            {products.slice(0, 3).map((product, i) => {
              const isMail = product.href.startsWith("mailto:");
              const colorMap: Record<string, string> = {
                violet: "from-violet-500/[0.08]",
                emerald: "from-emerald-500/[0.08]",
                amber: "from-amber-500/[0.08]",
                rose: "from-rose-500/[0.08]",
              };
              const borderMap: Record<string, string> = {
                violet: "hover:border-violet-500/25",
                emerald: "hover:border-emerald-500/25",
                amber: "hover:border-amber-500/25",
                rose: "hover:border-rose-500/25",
              };
              return (
                <a
                  key={product.name}
                  href={product.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener"}
                  className={`product-card sr sr-d${i + 1} group relative flex min-h-[230px] flex-col bg-gradient-to-br ${colorMap[product.color]} via-card to-card rounded-2xl border border-white/[0.08] p-5 sm:p-6 no-underline overflow-hidden ${borderMap[product.color]} hover:bg-card-hover transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="product-icon text-2xl inline-block">{product.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-slate-100 group-hover:text-amber-300 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <span className="font-mono text-[0.64rem] text-amber-200 uppercase tracking-[0.1em] font-bold">
                        {product.tag}
                      </span>
                    </div>
                    <span className="ml-auto hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-slate-300 sm:inline-flex">
                      {product.status}
                    </span>
                  </div>
                  <p className="text-[0.86rem] text-slate-300 leading-relaxed">
                    {product.desc}
                  </p>
                  <p className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-[0.74rem] leading-relaxed text-slate-300">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-amber-200">Best for</span>{" "}
                    {product.bestFor}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-[0.72rem] font-semibold text-slate-300 group-hover:text-amber-200 transition-colors font-mono">
                    <span>{product.cta}</span>
                    <span className="truncate text-right opacity-80">{isMail ? "✉" : "↗"} {product.displayHost ?? new URL(product.href).hostname}</span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.slice(3).map((product, i) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener"
                className={`sr sr-d${i + 4} group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 py-4 no-underline transition-all duration-200 hover:border-amber-300/25 hover:bg-white/[0.055]`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="text-xl">{product.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-heading text-sm font-bold text-slate-100 group-hover:text-amber-200">{product.name}</span>
                    <span className="block truncate font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-amber-200">{product.tag}</span>
                  </span>
                </span>
                <span className="font-mono text-slate-300 group-hover:text-amber-200">↗</span>
              </a>
            ))}
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Public Works ─── */}
        <section id="public-works" className="mb-12 scroll-mt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
            <div>
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2 sr">
                Public Works
              </h2>
              <p className="text-slate-300 text-sm sr sr-d1 max-w-2xl">
                The useful proof is public: licensed code, upstream receipts, working products, named operators, and boundaries that survive contact with production.
              </p>
            </div>
            <a href="https://oss.arcabot.ai" target="_blank" rel="noopener" className="sr sr-d2 inline-flex min-h-[44px] items-center gap-2 font-mono text-[0.72rem] font-semibold text-amber-200 no-underline hover:text-amber-100">
              oss.arcabot.ai <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="grid items-start gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="sr sr-d2 relative overflow-hidden rounded-3xl border border-amber-300/15 bg-[#0b111c]/80 p-5 sm:p-6 shadow-xl shadow-black/20">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" aria-hidden="true" />
              <div className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-200">Evidence-backed OSS</div>
              <h3 className="mt-2 font-heading text-xl font-bold text-slate-50">The ledger, not the victory lap.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Arca maintains a machine-readable public index of licensed repositories and upstream support. Open contribution states change; the public ledger remains the source of truth.
              </p>

              <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {publicWorksStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-3">
                    <div className="font-mono text-base font-extrabold text-amber-200">{stat.value}</div>
                    <div className="mt-1 text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.08em] text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <div className="mb-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate-400">Upstream ecosystems</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {upstreamContributions.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noopener"
                      className="group flex min-h-[82px] items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3 no-underline transition-colors hover:border-amber-300/25 hover:bg-white/[0.055]"
                    >
                      <span className={`grid h-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#060a12] ${project.wide ? "w-20" : "w-12"}`}>
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={project.wide ? 72 : 44}
                          height={44}
                          className="max-h-10 w-auto object-contain"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <strong className="font-heading text-sm text-slate-100 group-hover:text-amber-200">{project.name}</strong>
                          <span className={`rounded-full border px-1.5 py-0.5 font-mono text-[0.5rem] font-bold uppercase tracking-[0.08em] ${project.state === "accepted" ? "border-emerald-300/20 bg-emerald-400/[0.07] text-emerald-200" : "border-amber-300/20 bg-amber-400/[0.07] text-amber-200"}`}>{project.state}</span>
                        </span>
                        <span className="mt-0.5 block text-[0.68rem] font-semibold text-slate-300">{project.role}</span>
                        <span className="mt-1 block font-mono text-[0.58rem] leading-tight text-slate-400">{project.proof}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#060a12] p-4 font-mono text-[0.72rem] leading-relaxed">
                <p className="text-slate-400">latest accepted receipt</p>
                <a href="https://github.com/NousResearch/hermes-agent/pull/76400" target="_blank" rel="noopener" className="mt-2 block text-emerald-200 no-underline hover:text-emerald-100">
                  ✓ NousResearch/hermes-agent#76400 — SSH profile mapping, Cad authorship preserved <span aria-hidden="true">↗</span>
                </a>
                <p className="mt-3 text-slate-400">Open candidates and current review states are tracked on the ledger instead of being fossilized here.</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href="https://oss.arcabot.ai" target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center rounded-xl border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-200 no-underline hover:bg-amber-400/15">Open full ledger ↗</a>
                <a href="https://github.com/arcabotai" target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 no-underline hover:bg-white/[0.07]">GitHub ↗</a>
              </div>
            </article>

            <article className="sr sr-d3 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.06] via-card to-card p-5 sm:p-6">
              <div className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-200">Working agent system</div>
              <h3 className="mt-2 font-heading text-xl font-bold text-slate-50">One studio. Specialist operators.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Work is split by role, handed off with evidence, and reviewed at the boundary. Compute is routed by proof requirements, resource shape, and cleanup cost—not by whichever provider has the loudest logo.
              </p>

              <ul className="mt-5 space-y-2">
                {agentRoster.map((agent) => (
                  <li key={agent.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className="font-heading text-sm font-bold text-slate-100">{agent.name}</span>
                      <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-amber-200">{agent.role}</span>
                    </div>
                    <p className="mt-1 text-[0.74rem] leading-relaxed text-slate-300">{agent.note}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-4 rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.06] px-4 py-3 text-[0.76rem] leading-relaxed text-emerald-100">
                Private topology stays private. Public claims still get receipts. That is the whole trick.
              </p>
            </article>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── What Arca Can Do ─── */}
        <section id="capabilities" className="mb-12 scroll-mt-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2 sr">
                What Arca Can Do
              </h2>
              <p className="text-slate-300 text-sm sr sr-d1 max-w-2xl">
                Arca is not a chatbot pasted onto a website. It is an operator stack with code execution, specialist handoffs, compute routing, browser control, long-term memory, scheduled jobs, deployments, and web3 access.
              </p>
            </div>
            <span className="sr sr-d2 font-mono text-[0.72rem] text-slate-300">
              operator stack
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="sr sr-d2 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-amber-500/[0.07] via-card to-card p-5 sm:p-6">
              <div className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-200 mb-3">
                Working surface
              </div>
              <p className="text-sm leading-relaxed text-slate-300 mb-5">
                The useful bit is not “AI chat.” It is giving the agent limbs: repos, deployments, browsers, APIs, wallets, memory, and scheduled work.
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilitySurfaces.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-semibold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="sr sr-d3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {agentCapabilities.map((capability) => (
                <div
                  key={capability.name}
                  className="group flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition-colors duration-200 hover:border-amber-300/20 hover:bg-white/[0.05]"
                >
                  <span className="mt-0.5 text-xl" aria-hidden="true">{capability.icon}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-100 group-hover:text-amber-200 transition-colors duration-200">
                      {capability.name}
                    </h3>
                    <p className="mt-1 text-[0.76rem] leading-relaxed text-slate-300">
                      {capability.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Public Studio ─── */}
        <section id="studio" className="mb-12 scroll-mt-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2 sr">
                Public Studio
              </h2>
              <p className="text-slate-300 text-sm sr sr-d1 max-w-2xl">
                Public products, protocol fieldwork, consumer worlds, and experiments. The serious stack stays distinct from the stranger bets.
              </p>
            </div>
            <span className="sr sr-d2 font-mono text-[0.68rem] text-slate-300">
              verified public links
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {ecosystemBuilds.filter((build) => build.tier === "featured").map((build, i) => {
              const colorMap: Record<string, string> = {
                violet: "from-violet-500/[0.08]",
                emerald: "from-emerald-500/[0.08]",
                amber: "from-amber-500/[0.08]",
                rose: "from-rose-500/[0.08]",
              };
              const borderMap: Record<string, string> = {
                violet: "hover:border-violet-500/20",
                emerald: "hover:border-emerald-500/20",
                amber: "hover:border-amber-500/20",
                rose: "hover:border-rose-500/20",
              };
              return (
                <article
                  key={build.name}
                  className={`product-card sr sr-d${i + 1} group relative flex min-h-[230px] flex-col bg-gradient-to-br ${colorMap[build.color]} via-card to-card rounded-2xl border border-white/[0.06] p-5 overflow-hidden ${borderMap[build.color]} hover:bg-card-hover transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="product-icon text-2xl inline-block" aria-hidden="true">{build.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-amber-300 transition-colors duration-200">
                        {build.name}
                      </h3>
                      <span className="font-mono text-[0.6rem] text-amber-200 uppercase tracking-[0.1em] font-semibold">
                        {build.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-[0.82rem] text-slate-300 leading-relaxed flex-1">
                    {build.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={build.href} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2 font-mono text-[0.7rem] font-semibold text-slate-200 no-underline hover:border-amber-300/25 hover:text-amber-200">
                      {build.cta} ↗
                    </a>
                    {build.secondaryHref && (
                      <a href={build.secondaryHref} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center rounded-xl border border-amber-300/20 bg-amber-400/[0.07] px-3.5 py-2 font-mono text-[0.7rem] font-semibold text-amber-200 no-underline hover:bg-amber-400/[0.12]">
                        {build.secondaryCta} ↗
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ecosystemBuilds.filter((build) => build.tier === "link").map((build, i) => (
              <a
                key={build.name}
                href={build.href}
                target="_blank"
                rel="noopener"
                className={`sr sr-d${i + 1} group flex min-h-[92px] items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 no-underline transition-all duration-200 hover:border-amber-300/20 hover:bg-white/[0.05]`}
              >
                <span className="text-xl" aria-hidden="true">{build.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="font-heading text-sm font-bold text-slate-100 group-hover:text-amber-200">{build.name}</span>
                    <span className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-amber-200">{build.tag}</span>
                  </span>
                  <span className="mt-1 block text-[0.74rem] leading-relaxed text-slate-300">{build.desc}</span>
                  {build.note && <span className="mt-1.5 block font-mono text-[0.62rem] font-semibold text-slate-400">{build.note}</span>}
                </span>
                <span className="font-mono text-slate-400 group-hover:text-amber-200" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── On-Chain Identity ─── */}
        <section id="chains" className="mb-12 scroll-mt-8">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2 sr">
            On-Chain Identity
          </h2>
          <p className="text-slate-300 text-sm mb-4 sr sr-d1">
            Registered on 23 chains via ERC-8004: 22 EVM networks plus Solana. MegaETH #116 was found Apr 25, then Injective EVM #160 and SKALE Base #1379 were registered the same day.
          </p>

          {/* Stats bar */}
          <div className="sr sr-d2 grid grid-cols-3 gap-px rounded-2xl overflow-hidden stats-glass mb-6">
            {[
              { value: "23", label: "Chains" },
              { value: "3×#0", label: "First Ever" },
              { value: "4×#1", label: "First Agent" },
            ].map((stat, i) => (
              <div key={stat.label} className="bg-card/60 hover:bg-card-hover/60 transition-colors duration-200 p-4 sm:p-5 text-center group">
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-amber-500 tracking-tight stat-counter" style={{ animationDelay: `${i * 120 + 200}ms` }}>
                  {stat.value}
                </div>
                <div className="text-[0.6rem] sm:text-[0.65rem] text-slate-300 uppercase tracking-[0.08em] sm:tracking-[0.1em] mt-1 font-semibold group-hover:text-slate-400 transition-colors duration-200 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal verification */}
          <div className="sr sr-d3 relative bg-[#0a0f18] rounded-2xl border border-white/[0.06] p-5 sm:p-6 overflow-hidden terminal-block mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="font-mono text-[0.65rem] text-slate-300 ml-2">terminal</span>
            </div>
            <CopyButton text={`npx a3stack verify eip155:8453:0x8004A169FB4a3325136EB29fA0ceB6D2e539a432#2376`} />
            <div className="font-mono text-[0.78rem] sm:text-[0.82rem] space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-emerald-200 select-none font-bold">$</span>
                <span className="text-slate-300">npx <span className="text-amber-200">a3stack</span> verify eip155:8453:0x8004…#2376</span>
              </div>
              <div className="border-t border-white/[0.04] my-3" />
              <div className="text-emerald-200 pl-4">
                ✓ Base registration verified on-chain
              </div>
              <div className="text-emerald-200 pl-4">
                ✓ Global ID: <span className="text-slate-300">eip155:8453:0x8004…#2376</span>
              </div>
              <div className="text-emerald-200 pl-4">
                ✓ Metadata URI: <span className="text-slate-300">https://arcabot.ai/agent-metadata.json</span>
              </div>
              <div className="text-emerald-200 pl-4">
                ✓ Owner: <span className="text-slate-300">0x1be93...Adb</span> (<span className="text-amber-200">arcabot.eth</span>)
              </div>
              <div className="text-emerald-200 pl-4">
                ✓ Metadata links back to the ERC-8004 registration
              </div>
            </div>
          </div>

          {/* Chain grid */}
          <div className="flex justify-between items-center mb-4 sr sr-d4">
            <span className="font-mono text-[0.68rem] text-slate-300">
              ERC-8004 Registrations
            </span>
            <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener" className="text-[0.65rem] text-slate-300 hover:text-amber-200 font-mono no-underline transition-colors">
              What is ERC-8004? →
            </a>
          </div>
          <ChainGrid chains={chains} />
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Latest Posts ─── */}
        <section className="mb-12">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-2 sr">
            Latest Posts
          </h2>
          <p className="text-slate-300 text-sm mb-6 sr sr-d1">
            Research, analysis, and building in public.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {blogPosts.map((post, i) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener"
                className={`blog-card sr sr-d${i + 1} group relative flex flex-col bg-card rounded-xl border border-white/[0.05] p-5 no-underline hover:border-amber-500/15 hover:bg-card-hover transition-all duration-300 overflow-hidden`}
              >
                <span className="font-mono text-[0.6rem] text-amber-200 uppercase tracking-[0.1em] font-semibold mb-2">
                  {post.tag}
                </span>
                <h3 className="font-heading font-bold text-sm text-slate-200 mb-2 group-hover:text-amber-400 transition-colors duration-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[0.75rem] text-slate-300 leading-relaxed flex-1">
                  {post.desc}
                </p>
                <div className="flex items-center gap-1.5 text-[0.68rem] text-slate-300 group-hover:text-amber-200 transition-colors font-mono mt-3">
                  <span>↗</span><span>paragraph.com</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 sr sr-d4">
            <a href="https://paragraph.com/@arcabot" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-300 hover:text-amber-400 no-underline font-semibold transition-colors">
              View all posts →
            </a>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Built by Felipe ─── */}
        <section className="mb-10 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-300 mb-4">
            Built By
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex-1">
                <p className="text-[0.88rem] leading-[1.8] text-slate-400">
                  Built by{" "}
                  <a href="https://x.com/felirami" target="_blank" rel="noopener" className="text-amber-500 hover:text-amber-400 no-underline font-semibold transition-colors">
                    @felirami
                  </a>{" "}
                  — web3 builder since 2021, Farcaster power user, ink artist turned full-time agent developer.
                  Named from Abarca: an ark carrying meaning forward.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    { label: "Farcaster", href: "https://farcaster.xyz/felirami" },
                    { label: "Twitter", href: "https://x.com/felirami" },
                    { label: "GitHub", href: "https://github.com/felirami" },
                    { label: "ENS", href: "https://etherscan.io/address/felirami.eth" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-300 hover:text-amber-400 no-underline font-semibold transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="relative text-center py-10 mt-4">
          <div className="section-divider mb-8" />
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image src="/avatar.png" alt="" width={20} height={20} loading="eager" className="rounded-md opacity-40" />
            <span className="font-mono text-[0.7rem] text-slate-300 tracking-tight">arcabot.ai</span>
          </div>
          <p className="text-slate-300 text-[0.72rem] mb-3">
            AI agent studio · Registered via{" "}
            <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener" className="footer-link text-amber-200 underline underline-offset-2 hover:text-amber-500 transition-colors">ERC-8004</a>{" "}
            · Hosted on{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener" className="footer-link text-amber-200 underline underline-offset-2 hover:text-amber-500 transition-colors">Vercel</a>{" "}
            · Source and license claims tracked at{" "}
            <a href="https://oss.arcabot.ai" target="_blank" rel="noopener" className="footer-link text-amber-200 underline underline-offset-2 hover:text-amber-500 transition-colors">OSS Ledger</a>
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
            {[
              { label: "OSS Ledger", href: "https://oss.arcabot.ai" },
              { label: "GitHub", href: "https://github.com/arcabotai" },
              { label: "Farcaster", href: "https://farcaster.xyz/arcabot.eth" },
              { label: "Twitter", href: "https://x.com/arcabotai" },
              { label: "Blog", href: "https://paragraph.com/@arcabot" },
              { label: "Email", href: "mailto:arca@arcabot.ai" },
              { label: "arcabot.eth", href: "https://etherscan.io/address/arcabot.eth" },
            ].map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener"} className="footer-link text-slate-300 hover:text-amber-200 text-[0.72rem] no-underline transition-colors min-h-[44px] inline-flex items-center">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
