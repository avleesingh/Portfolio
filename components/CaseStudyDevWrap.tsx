"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Monitor,
  Layers,
  Sparkles,
  Maximize2,
  X,
  Search,
  Cpu,
  Scale,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
  Share2,
  MessageSquareQuote,
  Target,
  Compass,
} from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  title: string;
  badge: string;
  caption: string;
  width: number;
  height: number;
}

const daemonScreenshot: Screenshot = {
  src: "/images/devwrap-daemon.jpg",
  alt: "DevWrap macOS Desktop Companion Daemon UI - Axum Local Telemetry Engine & Window Poller",
  title: "macOS Desktop Companion Daemon UI",
  badge: "Primary Architecture Engine",
  caption:
    "Axum Rust Daemon polling window titles at 127.0.0.1:8080 with local-first SQLite logging — tracking active IDEs (Cursor, VS Code, Zed) and terminal processes with zero external data leaks.",
  width: 1594,
  height: 1190,
};

const extensionScreenshots: Screenshot[] = [
  {
    src: "/images/devwrap extension-1.png",
    alt: "DevWrap Chrome Extension Popup - ROI & Stack Tracker",
    title: "Chrome Extension Popup (ROI & Stack Tracker)",
    badge: "Active Stack Telemetry",
    caption:
      "Real-time active tab telemetry tracking web-based developer tools (GitHub, Figma, Linear, Vercel) with live cost-per-minute ROI metrics and session timers.",
    width: 844,
    height: 1208,
  },
  {
    src: "/images/devwrap extension-2.png",
    alt: "DevWrap Chrome Extension Active Dev Stack View",
    title: "Active Dev Stack View",
    badge: "Session Utilization",
    caption:
      "Breakdown of current session tool utilization, context switching frequency, and automated idle subscription detection across browser workflows.",
    width: 848,
    height: 1202,
  },
];

const wrappedScreenshots: Screenshot[] = [
  {
    src: "/images/devwrap card-1.png",
    alt: "DevWrap Persona Card - Full-Stack Speedrunner",
    title: "Dev Stack Wrapped Persona ('Full-Stack Speedrunner')",
    badge: "Developer Persona",
    caption:
      "Shareable Developer Persona & Economy Cards — Archetype classification synthesizing total keystrokes, active tool diversity, and terminal velocity into high-converting social shareables.",
    width: 826,
    height: 1168,
  },
  {
    src: "/images/devwrap card-2.png",
    alt: "DevWrap Dev Economy Analytics Card - Every dollar had a purpose",
    title: "Dev Economy Analytics Card ('Every dollar had a purpose')",
    badge: "Spend Efficiency Audit",
    caption:
      "Quantitative subscription audit showcasing cost-efficiency ratios, unused license warnings, and net productivity dividends across developer tools.",
    width: 814,
    height: 1156,
  },
];

export default function CaseStudyDevWrap() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<Screenshot | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedScreenshot(null);
      }
    };
    if (selectedScreenshot) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedScreenshot]);

  return (
    <section
      id="devwrap"
      className="scroll-mt-20 border-b border-blue-300/60 bg-gradient-to-b from-emerald-200 via-teal-100 to-blue-200 px-6 py-20 transition-colors duration-700 ease-in-out"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Badges & Title */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full border border-white/90 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-md">
            Case Study 02 · Developer Telemetry &amp; SaaS Economics
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-900 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3 w-3" aria-hidden />
            Local-First Architecture
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          DevWrap — Cross-Platform Telemetry &amp; Subscription ROI System
        </h2>
        <p className="mt-3 max-w-2xl text-lg font-medium text-gray-700">
          Quantifying active tool usage across web browsers and desktop IDEs to
          monitor developer SaaS ROI.
        </p>

        {/* Quick Specs Pill Bar */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-gray-800">
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Axum Rust Daemon (127.0.0.1:8080)
          </span>
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Chrome Extension MV3
          </span>
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Zero-Overhead SQLite
          </span>
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Passive Telemetry (&lt;0.1% CPU)
          </span>
        </div>

        {/* Gallery Grid Structure with Dark Framed Containers */}
        <div className="mt-12 space-y-12">
          {/* Subsection 1: Desktop Companion Daemon (Featured Banner) */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/90 bg-white/80 text-gray-900 shadow-sm backdrop-blur-md">
                  <Monitor className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Desktop Companion Daemon
                  </h3>
                  <p className="text-xs text-gray-600">
                    Primary architecture engine banner · Axum Rust daemon polling window titles
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-mono font-medium text-emerald-950 shadow-sm backdrop-blur-md">
                127.0.0.1:8080 · Axum Rust Daemon
              </span>
            </div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedScreenshot(daemonScreenshot)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl ring-1 ring-slate-800/80 transition-all duration-300 hover:border-slate-700 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden bg-slate-950 p-2 sm:p-4">
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur transition-opacity opacity-0 group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                  <span>Click to expand</span>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={daemonScreenshot.src}
                    alt={daemonScreenshot.alt}
                    width={daemonScreenshot.width}
                    height={daemonScreenshot.height}
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority
                    className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="border-t border-slate-800 bg-slate-900/95 p-5 sm:p-6 text-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                    {daemonScreenshot.badge}
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    {daemonScreenshot.title}
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {daemonScreenshot.caption}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Subsection 2: Chrome Extension UI (2-column grid) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/90 bg-white/80 text-gray-900 shadow-sm backdrop-blur-md">
                <Layers className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Chrome Extension UI
                </h3>
                <p className="text-xs text-gray-600">
                  Side-by-side active dev stack detection &amp; real-time ROI tracking
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {extensionScreenshots.map((item) => (
                <motion.div
                  key={item.src}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedScreenshot(item)}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl ring-1 ring-slate-800/80 transition-all duration-300 hover:border-slate-700 hover:shadow-2xl"
                >
                  <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-950 p-3 sm:p-4">
                    <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur transition-opacity opacity-0 group-hover:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                      <span>Click to expand</span>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-md">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="border-t border-slate-800 bg-slate-900/95 p-5 text-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="mt-2 text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subsection 3: Dev Stack Wrapped Cards (2-column grid under header) */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/90 bg-white/80 text-gray-900 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Wrapped Shareables &amp; Analytics
                  </h3>
                  <p className="text-xs text-gray-600">
                    Month-end developer milestone shareables and subscription efficiency audits
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 shadow-sm backdrop-blur-md">
                Daily Refresh · Month-End Drop
              </span>
            </div>

            {/* Core Engagement Loop Highlight */}
            <div className="rounded-2xl border border-indigo-200/90 bg-white/80 backdrop-blur-xl px-4 py-3 text-xs leading-relaxed text-indigo-950 shadow-md sm:text-sm">
              <span className="font-semibold text-indigo-900">Core engagement loop: </span>
              Tracked time refreshes daily—building continuous momentum and anticipation for the automated Month-End DevWrap drop.
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {wrappedScreenshots.map((item) => (
                <motion.div
                  key={item.src}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedScreenshot(item)}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl ring-1 ring-slate-800/80 transition-all duration-300 hover:border-slate-700 hover:shadow-2xl"
                >
                  <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-950 p-3 sm:p-5">
                    <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur transition-opacity opacity-0 group-hover:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5" aria-hidden />
                      <span>Click to expand</span>
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-800">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="border-t border-slate-800 bg-slate-900/95 p-5 text-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="mt-2 text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Flagship PM Breakdown Header Banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/90 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-300 bg-teal-100 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-teal-950">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Flagship PM Case Study
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Product Thinking &amp; Architectural Specifications
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Directly adapted from DevWrap&apos;s Telemetry &amp; Subscription ROI Architecture · Grounded in developer ethnography, local privacy, and SaaS unit economics.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-white/80 bg-white/90 px-4 py-2 text-right shadow-sm backdrop-blur-md">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800">APM Focus</span>
              <p className="text-xs font-bold text-gray-900">Telemetry ➔ Local Privacy ➔ Viral Growth</p>
            </div>
          </div>
        </div>

        {/* Open PM Breakdown Cards (Crisp High-Contrast Glassmorphic Containers) */}
        <div className="mt-8 space-y-8">
          {/* 01 / Problem & Developer Empathy */}
          <div className="rounded-3xl border border-rose-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-rose-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-300 bg-rose-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-rose-900 uppercase">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                01 / EMPATHY &amp; PROBLEM
              </span>
              <span className="inline-flex items-center rounded-full border border-rose-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-rose-900 shadow-xs">
                SaaS Fatigue: $20–$60/mo
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Invisible SaaS Drop-Off &amp; Subscription Fatigue in Modern Toolchains
            </h4>

            {/* Core Highlight Quote Callout */}
            <div className="mt-4 rounded-2xl border-l-4 border-rose-500 border border-white/90 bg-white/85 backdrop-blur-md p-4 shadow-sm">
              <div className="flex items-start gap-2.5">
                <MessageSquareQuote className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                <p className="text-base font-semibold italic text-gray-900 sm:text-lg">
                  &ldquo;Developers context-switch across native IDEs, web tabs, and terminal sessions, creating invisible SaaS drop-off.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* Stat Card */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="text-3xl font-extrabold text-rose-600">$20–$60</div>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-rose-900">
                  Monthly Spend per Seat
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-gray-800">
                  Engineers pay <strong>$20–$60/mo for multiple AI/dev tools</strong> (Cursor, ChatGPT, Copilot, Vercel) but lack visibility into active usage ROI, resulting in subscription fatigue.
                </p>
              </div>

              {/* Core Problem Observation */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 md:col-span-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                    The Invisible Subscription Decay Dynamic
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-800">
                  Developers adopt new productivity and AI tools with high initial enthusiasm. However, <strong>within 3–4 weeks, active usage silently decays</strong> as engineering routines revert, leaving expensive &ldquo;zombie subscriptions&rdquo; renewing on autopilot.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">
                  Because work is fragmented across native desktop IDEs, web browsers, and terminal windows, neither individual developers nor engineering teams have transparent metrics on <strong>actual productive hours per dollar spent</strong>.
                </p>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span><strong className="text-white">Primary Friction:</strong> Multi-tool subscription bloat with zero objective ROI metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span><strong className="text-white">Behavioral Pattern:</strong> Silent drop-off from enthusiastic signup to unused monthly renewals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span><strong className="text-white">Product Thesis:</strong> Continuous passive telemetry calculates real $/hour value to eliminate waste</span>
                </div>
              </div>
            </div>
          </div>

          {/* 02 / User Research Foundation */}
          <div className="rounded-3xl border border-blue-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-blue-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-blue-900 uppercase">
                <Search className="h-3.5 w-3.5" aria-hidden />
                02 / USER RESEARCH FOUNDATION
              </span>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-blue-900 shadow-xs">
                Usage Analytics &amp; Workflow Audit
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              The 70% Binary Blindspot: Why Web Analytics Fail Developers
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Analyzed <strong>active telemetry patterns across web browsers vs. desktop IDEs</strong> to discover why traditional browser extensions and cloud SaaS trackers fail to capture developer velocity.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {/* Finding 1 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-700">70%+</span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-900">Local Binary</span>
                </div>
                <h5 className="mt-2 text-sm font-bold text-gray-900">
                  Desktop Binary Velocity
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  Traditional web-only analytics fail because <strong>70%+ of heavy developer velocity happens in local desktop binaries</strong> (VS Code, Cursor, Terminal). Browser-only trackers miss the vast majority of real work.
                </p>
              </div>

              {/* Finding 2 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-700">&lt;50ms</span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-900">Zero Friction</span>
                </div>
                <h5 className="mt-2 text-sm font-bold text-gray-900">
                  Zero Interruption Tolerance
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  Developers instantly uninstall tools that require manual timer-starting, tagging, or prompt categorizations. Telemetry must be <strong>100% passive, ambient, and zero-interruption</strong>.
                </p>
              </div>

              {/* Finding 3 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-700">100%</span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-900">On-Device</span>
                </div>
                <h5 className="mt-2 text-sm font-bold text-gray-900">
                  Privacy Non-Negotiable
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  Engineers vehemently reject spyware sending code paths or raw window titles to third-party clouds. A <strong>100% verifiable local-first guarantee</strong> is mandatory for developer adoption.
                </p>
              </div>
            </div>

            {/* Recruiter Skimmable Synthesis */}
            <div className="mt-5 rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-4 text-xs leading-relaxed text-blue-950 shadow-sm">
              <span className="font-bold text-blue-900">Key Research Insight: </span>
              Solving developer tool telemetry requires a unified bridge between local OS window-manager events and browser tab focus—operating completely on-device without cloud surveillance.
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Measurement Gap:</strong> 70%+ of software velocity resides in native desktop IDE binaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Friction Threshold:</strong> Zero-interruption tolerance; manual timers have &gt;90% churn</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Privacy Architecture:</strong> 100% local SQLite storage with zero outbound telemetry</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 / Strategy & Product Architecture */}
          <div className="rounded-3xl border border-purple-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-purple-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-purple-900 uppercase">
                <Cpu className="h-3.5 w-3.5" aria-hidden />
                03 / STRATEGY &amp; ARCHITECTURE
              </span>
              <span className="inline-flex items-center rounded-full border border-purple-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-purple-900 shadow-xs">
                Hybrid Local Telemetry
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Cross-Platform Telemetry Without Privacy Invasion
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              DevWrap bridges native OS window events and browser tabs into an auditable, privacy-first local telemetry pipeline.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Architecture Block 1 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-800">
                      01
                    </span>
                    <span className="text-[10px] font-mono text-purple-700">127.0.0.1:8080</span>
                  </div>
                  <h5 className="mt-3 text-sm font-bold text-gray-900">
                    Axum Rust Daemon
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    <strong>Local-First Axum Rust Daemon polling window titles at 127.0.0.1:8080</strong> paired with a light Chrome Extension. Sub-millisecond execution and zero external network dependency.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">Monitors: </span>
                  Cursor, VS Code, Zed, Terminal, Docker
                </div>
              </div>

              {/* Architecture Block 2 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-800">
                      02
                    </span>
                    <span className="text-[10px] font-mono text-purple-700">Manifest V3</span>
                  </div>
                  <h5 className="mt-3 text-sm font-bold text-gray-900">
                    Light Chrome Extension
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    Lightweight Chrome Extension tracking active browser SaaS tools (GitHub PRs, Linear tickets, Figma, AWS, Vercel dashboards).
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">Sync: </span>
                  Local loopback heartbeats to daemon
                </div>
              </div>

              {/* Architecture Block 3 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-800">
                      03
                    </span>
                    <span className="text-[10px] font-mono text-purple-700">On-Device DB</span>
                  </div>
                  <h5 className="mt-3 text-sm font-bold text-gray-900">
                    Zero-Overhead SQLite
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    <strong>Zero-overhead SQLite local storage logging active heartbeats without cloud privacy invasion.</strong> No raw browsing or source code ever leaves the machine.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">Data model: </span>
                  Indexed timestamps, app bundle ID, duration
                </div>
              </div>

              {/* Architecture Block 4 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-800">
                      04
                    </span>
                    <span className="text-[10px] font-mono text-purple-700">$/hr Metric</span>
                  </div>
                  <h5 className="mt-3 text-sm font-bold text-gray-900">
                    Cost-Per-Hour Engine
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    <strong>Real-Time &ldquo;Cost-Per-Hour&rdquo; ROI calculation engine ($/hr blended rate)</strong> comparing monthly subscription price to actual minutes spent in active focus.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">Formula: </span>
                  (Monthly Cost) / (Active Productive Hours)
                </div>
              </div>
            </div>

            {/* Architecture Dataflow Strip */}
            <div className="mt-5 rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-purple-950">
                <span className="font-bold text-purple-900">Dataflow Pipeline:</span>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                  <span className="rounded bg-purple-50 px-2 py-0.5 border border-purple-200">OS Window Poller</span>
                  <span>➔</span>
                  <span className="rounded bg-purple-50 px-2 py-0.5 border border-purple-200">Chrome MV3 Heartbeat</span>
                  <span>➔</span>
                  <span className="rounded bg-purple-50 px-2 py-0.5 border border-purple-200">Axum Daemon (127.0.0.1:8080)</span>
                  <span>➔</span>
                  <span className="rounded bg-purple-50 px-2 py-0.5 border border-purple-200">Local SQLite</span>
                  <span>➔</span>
                  <span className="rounded bg-purple-50 px-2 py-0.5 border border-purple-200">$/hr ROI Benchmark</span>
                </div>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-white">Daemon Loop:</strong> Axum Rust service polling OS active window titles at 127.0.0.1:8080</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-white">Browser Bridge:</strong> Manifest V3 extension syncing web SaaS tabs via local loopback</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-white">ROI Engine:</strong> Automated $/hr blended cost allocation across active developer toolchains</span>
                </div>
              </div>
            </div>
          </div>

          {/* 04 / Product Tradeoffs & Engineering Decisions */}
          <div className="rounded-3xl border border-amber-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-amber-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-amber-950 uppercase">
                <Scale className="h-3.5 w-3.5" aria-hidden />
                04 / HARD TRADEOFFS
              </span>
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-amber-950 shadow-xs">
                Privacy &amp; Performance Engineering
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Hard Product Tradeoffs: Privacy, Battery, and Trust
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Navigating core architectural decisions where developer adoption hinges on zero-compromise security and resource efficiency.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Tradeoff 1 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 sm:p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-950">
                      Tradeoff 01
                    </span>
                    <span className="text-xs font-semibold text-amber-900">Privacy vs. Cloud Sync</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    Local Privacy vs. Cloud Synchronization
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    <strong>The Dilemma:</strong> Storing telemetry in the cloud would enable cross-device synchronization and centralized team dashboards, but transmitting raw window titles and private project paths introduces massive developer privacy resistance and security concerns.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border-l-4 border-amber-500 border border-amber-200 bg-amber-50/90 p-3.5 text-xs leading-relaxed text-amber-950">
                  <strong className="text-amber-900">The PM Decision:</strong> <strong>Keeping raw window titles stored 100% locally on-device vs. cloud aggregation for cross-device telemetry.</strong> Raw window titles never touch external cloud servers; only user-sanitized export cards and aggregate month-end metrics leave the machine upon explicit user request.
                </div>
              </div>

              {/* Tradeoff 2 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 sm:p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-950">
                      Tradeoff 02
                    </span>
                    <span className="text-xs font-semibold text-amber-900">Precision vs. Battery Drain</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    Battery &amp; CPU Footprint vs. Precision
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    <strong>The Dilemma:</strong> 1-second continuous window polling guarantees microsecond precision, but triggers frequent macOS Accessibility API calls that spin up fans, degrade CPU performance, and drain laptop batteries.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border-l-4 border-amber-500 border border-amber-200 bg-amber-50/90 p-3.5 text-xs leading-relaxed text-amber-950">
                  <strong className="text-amber-900">The PM Decision:</strong> <strong>Optimizing window-polling loops to 15s heartbeats with strict dynamic filters (<code className="font-mono text-amber-900">cursor</code>, <code className="font-mono text-amber-900">code</code>, <code className="font-mono text-amber-900">antigravity</code>) to avoid CPU throttle</strong>, capping daemon CPU usage under 0.1% while maintaining 98%+ telemetry accuracy.
                </div>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span><strong className="text-white">Security Frontier:</strong> 100% on-device zero-leak telemetry; raw window titles never exit localhost</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span><strong className="text-white">Battery Budget:</strong> 15-second heartbeat loop keeping daemon CPU usage strictly &lt;0.1%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span><strong className="text-white">Adoption Win:</strong> Complete developer trust unlocked through transparent local SQLite architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* 05 / Roadmap & Growth Mechanics */}
          <div className="rounded-3xl border border-emerald-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-emerald-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-emerald-950 uppercase">
                <Compass className="h-3.5 w-3.5" aria-hidden />
                05 / ROADMAP
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-emerald-950 shadow-xs">
                Growth Mechanics &amp; Expansion
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Growth &amp; Viral Engagement Mechanics
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Architecting sustainable daily retention loops combined with high-converting organic acquisition mechanics.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Growth Mechanic 1: Daily Refresh Loop */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Retention Loop
                  </span>
                </div>
                <h5 className="mt-3 text-base font-bold text-gray-900">
                  Daily Refresh Habit Loop
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  <strong>Daily refresh loop:</strong> Active time refreshes daily, building continuous habit loops and anticipation for the automated <strong>Month-End DevWrap Drop</strong>.
                </p>
                <ul className="mt-3 space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span><strong>Daily active stack counter:</strong> Immediate visibility into today&apos;s focused coding hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span><strong>Idle subscription alerts:</strong> Identifies paid tools with 0 recorded minutes over 7 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span><strong>Anticipation mechanic:</strong> Accumulates monthly milestones toward the final Wrapped drop</span>
                  </li>
                </ul>
              </div>

              {/* Growth Mechanic 2: Shareable Personas */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Viral Acquisition
                  </span>
                </div>
                <h5 className="mt-3 text-base font-bold text-gray-900">
                  Shareable Developer Personas
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  <strong>Shareable Developer Personas:</strong> Generating virality cards (<em>&ldquo;Full-Stack Speedrunner&rdquo;</em>, <em>&ldquo;Every dollar had a purpose&rdquo;</em>) with <strong>1-click posting to LinkedIn &amp; X</strong>.
                </p>
                <ul className="mt-3 space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-600" />
                    <span><strong>High-converting social cards:</strong> Formatted perfectly for developer vanity and peer discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-600" />
                    <span><strong>Engineered K-factor virality:</strong> Developers comparing stacks across Discord, Slack, and X</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-600" />
                    <span><strong>Zero-CAC distribution:</strong> Organic peer referral loop driving desktop daemon installs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phased Roadmap Sequence */}
            <div className="mt-6 border-t border-emerald-200/80 pt-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-950">
                Product Evolution Milestones
              </span>
              <div className="mt-3 grid gap-3 sm:grid-cols-3 text-xs">
                <div className="rounded-xl border border-white/90 bg-white/85 backdrop-blur-md p-3 shadow-sm">
                  <span className="font-bold text-emerald-700">Phase 1 · Live Core:</span>
                  <p className="mt-1 text-gray-600">Axum daemon, Chrome MV3 tracker, SQLite storage, and Month-End Wrapped shareables.</p>
                </div>
                <div className="rounded-xl border border-white/90 bg-white/85 backdrop-blur-md p-3 shadow-sm">
                  <span className="font-bold text-blue-700">Phase 2 · Team Digests:</span>
                  <p className="mt-1 text-gray-600">Anonymized engineering team license rollups and idle seat reallocation insights.</p>
                </div>
                <div className="rounded-xl border border-white/90 bg-white/85 backdrop-blur-md p-3 shadow-sm">
                  <span className="font-bold text-purple-700">Phase 3 · Automation:</span>
                  <p className="mt-1 text-gray-600">Cross-platform Linux &amp; Windows support; 1-click subscription pause/cancellation hooks.</p>
                </div>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">Retention Driver:</strong> Daily refresh loop drives recurring daily engagement and churn detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">Organic Acquisition:</strong> Shareable monthly developer personas engineered for X and LinkedIn loops</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">Long-term Moat:</strong> Cross-platform OS telemetry daemon evolving into team SaaS governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreenshot(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedScreenshot.title}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300">
                    {selectedScreenshot.badge}
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {selectedScreenshot.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedScreenshot(null)}
                  className="rounded-full p-1 text-gray-400 transition hover:bg-gray-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
                  aria-label="Close image preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-auto p-4 sm:p-6">
                <Image
                  src={selectedScreenshot.src}
                  alt={selectedScreenshot.alt}
                  width={selectedScreenshot.width}
                  height={selectedScreenshot.height}
                  className="max-h-[65vh] w-auto rounded-lg object-contain shadow-md"
                  priority
                />
              </div>

              <div className="border-t border-gray-800 bg-gray-900/90 px-5 py-3.5">
                <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                  {selectedScreenshot.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
