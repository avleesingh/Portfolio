"use client";

import Image from "next/image";
import {
  Sparkles,
  HeartHandshake,
  Search,
  Cpu,
  Scale,
  Compass,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Volume2,
  MessageSquareQuote,
  Target,
} from "lucide-react";

export default function CaseStudyBeti() {
  return (
    <section
      id="beti"
      className="scroll-mt-20 border-b border-amber-300/60 bg-gradient-to-b from-purple-200 via-violet-100 to-amber-200 px-6 py-20 transition-colors duration-700 ease-in-out"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Badges & Title */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full border border-white/90 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-md">
            Case Study 01 · Accessibility &amp; Multimodal AI
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-900 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3 w-3" aria-hidden />
            Youth Entrepreneurs Challenge Finalist
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          BETI AI — Voice-First Assistant for Screen Navigation
        </h2>
        <p className="mt-3 max-w-2xl text-lg font-medium text-gray-700">
          Empowering elderly users to navigate complex mobile interfaces through
          real-time voice guidance.
        </p>

        {/* Quick Specs Pill Bar */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-gray-800">
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Sarvam AI Speech Models
          </span>
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Gemini Multimodal LLM
          </span>
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Hindi · Hinglish · English
          </span>
          <span className="rounded-md border border-white/90 bg-white/80 px-2.5 py-1 shadow-xs backdrop-blur-md">
            Android Accessibility Overlay
          </span>
        </div>

        {/* Media Section: Dark Framed Phone Video & UI Screenshots */}
        <div className="mt-10 flex justify-center">
          <div className="mx-auto w-fit overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-2 shadow-2xl ring-1 ring-slate-800/80">
            <video
              controls
              playsInline
              preload="metadata"
              className="max-h-[500px] sm:max-h-[550px] w-auto max-w-full rounded-2xl object-contain"
            >
              <source src="/videos/beti-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="w-fit overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-2 shadow-2xl ring-1 ring-slate-800/80">
            <Image
              src="/images/beti-1.jpeg"
              alt="BETI UI overview"
              width={674}
              height={1512}
              priority
              sizes="(max-width: 640px) 100vw, 300px"
              className="max-h-[500px] sm:max-h-[550px] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
          <div className="w-fit overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-2 shadow-2xl ring-1 ring-slate-800/80">
            <Image
              src="/images/beti-2.jpeg"
              alt="BETI step-by-step guidance UI"
              width={672}
              height={1512}
              sizes="(max-width: 640px) 100vw, 300px"
              className="max-h-[500px] sm:max-h-[550px] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>

        {/* Flagship PM Breakdown Header Banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/90 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-950">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Flagship PM Case Study
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Product Thinking &amp; Architectural Specifications
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Directly adapted from BETI&apos;s product discovery deck · Grounded in ethnographic field research, voice ergonomics, and system tradeoffs.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-white/80 bg-white/90 px-4 py-2 text-right shadow-sm backdrop-blur-md">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700">APM Focus</span>
              <p className="text-xs font-bold text-gray-900">Empathy ➔ Systems Design ➔ Impact</p>
            </div>
          </div>
        </div>

        {/* Open PM Breakdown Cards (Crisp High-Contrast Glassmorphic Containers) */}
        <div className="mt-8 space-y-8">
          {/* 01 / Problem & Empathy */}
          <div className="rounded-3xl border border-rose-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-rose-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-300 bg-rose-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-rose-900 uppercase">
                <HeartHandshake className="h-3.5 w-3.5" aria-hidden />
                01 / EMPATHY &amp; PROBLEM
              </span>
              <span className="inline-flex items-center rounded-full border border-rose-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-rose-900 shadow-xs">
                HelpAge India (2024)
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              The Digital Divide Isn&apos;t Smartphone Ownership — It&apos;s Confidence
            </h4>

            {/* Core Highlight Quote Callout */}
            <div className="mt-4 rounded-2xl border-l-4 border-rose-500 border border-white/90 bg-white/85 backdrop-blur-md p-4 shadow-sm">
              <div className="flex items-start gap-2.5">
                <MessageSquareQuote className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                <p className="text-base font-semibold italic text-gray-900 sm:text-lg">
                  &ldquo;The gap isn&apos;t smartphone ownership; it&apos;s confidence.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* Stat Card */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="text-3xl font-extrabold text-rose-600">1 in 5</div>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-rose-900">
                  Older Adults in India
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-gray-800">
                  <strong>Only 1 in 5 older adults surveyed can use digital devices comfortably</strong> (HelpAge India, 2024), despite massive smartphone penetration across Tier 1, 2, and 3 cities.
                </p>
              </div>

              {/* Core Problem Observation */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 md:col-span-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                    Core Ethnographic Observation
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-800">
                  Elderly users routinely own capable 4G/5G smartphones but <strong>wait hours for children, grandchildren, or domestic househelp to become free</strong> before attempting everyday tasks like cab bookings, train tickets, bill payments, or basic phone settings.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">
                  The psychological root cause is not hardware illiteracy, but <strong>visceral anxiety of catastrophic error</strong>: fear that one misplaced tap will transfer money to a stranger, lock their phone, or wipe family contacts.
                </p>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span><strong className="text-white">Target Persona:</strong> Seniors (ages 58–78) navigating smartphone apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span><strong className="text-white">Primary Friction:</strong> Loss of independence due to fear of destructive mistakes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span><strong className="text-white">Product Thesis:</strong> A compassionate voice companion that builds autonomy, not dependence</span>
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
                15–20 Deep Field Interviews
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Mapping Digital Anxiety: Fieldwork with Seniors &amp; Househelp
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Conducted <strong>15–20 deep qualitative user interviews</strong> with elderly individuals and domestic caregivers to map exact triggers of digital anxiety across everyday consumer applications.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {/* Finding 1 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <AlertCircle className="h-4 w-4" aria-hidden />
                </div>
                <h5 className="mt-3 text-sm font-bold text-gray-900">
                  Cognitive Overload &amp; Clutter
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  Unfamiliar app flows present <strong>10+ competing visual targets</strong> per screen. Users cannot infer visual hierarchy or abstract icon meanings, causing immediate hesitation and task abandonment.
                </p>
              </div>

              {/* Finding 2 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                </div>
                <h5 className="mt-3 text-sm font-bold text-gray-900">
                  The &ldquo;Catastrophic Tap&rdquo; Fear
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  Users fear that a <strong>single wrong tap will lead to money loss</strong>, permanent data deletion, or getting trapped in nested app hierarchies with no visible exit or undo path.
                </p>
              </div>

              {/* Finding 3 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Volume2 className="h-4 w-4" aria-hidden />
                </div>
                <h5 className="mt-3 text-sm font-bold text-gray-900">
                  Spoken Voice Over Visual Guides
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  Static tooltips, manuals, and instructional videos were <strong>100% abandoned</strong>. Users universally preferred calm, stepwise spoken guidance delivered one short step at a time in colloquial language.
                </p>
              </div>
            </div>

            {/* Recruiter Skimmable Synthesis */}
            <div className="mt-5 rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-4 text-xs leading-relaxed text-blue-950 shadow-sm">
              <span className="font-bold text-blue-900">Key Research Insight: </span>
              Elderly users don&apos;t want an alternate lite-version app that strips features; they want to use the <em>same mainstream apps</em> (Uber, IRCTC, WhatsApp) as their families, but with an empathetic guide at their side.
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Field Methodology:</strong> 15–20 deep qualitative interviews with seniors &amp; domestic help</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Core Barrier:</strong> Fear of single accidental taps causing financial or data loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-white">UX Imperative:</strong> Spoken conversational guidance over ignored static tooltips</span>
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
                Tri-Pillar Design
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Adapting Technology to People: The Tri-Pillar Architecture
            </h4>

            {/* Core Thesis Callout */}
            <div className="mt-4 rounded-2xl border-l-4 border-purple-500 border border-white/90 bg-white/85 backdrop-blur-md p-4 shadow-sm">
              <div className="flex items-start gap-2.5">
                <MessageSquareQuote className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
                <p className="text-base font-semibold italic text-gray-900 sm:text-lg">
                  &ldquo;Technology should adapt to people, not the other way around.&rdquo;
                </p>
              </div>
            </div>

            {/* Tri-Pillar Grid */}
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* Pillar 1 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-900">
                      01
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-800">Multilingual</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    Multilingual Natural Voice
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    Natural, colloquial <strong>Hindi, Hinglish, and English</strong> powered by Sarvam AI voice models &amp; Gemini LLMs. Engineered with high tolerance for elderly hesitation, dialect variance, and colloquial phrasings.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">Example prompt: </span>
                  &ldquo;Beti, meri Dilli ki train check karo na&rdquo;
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-900">
                      02
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-800">Persistence</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    Draggable Floating Companion
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    A system-level draggable widget that <strong>maintains persistent UX context across third-party app switches</strong>—retaining conversation memory as users jump between WhatsApp links, SMS OTPs, and banking apps.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">System anchor: </span>
                  Android Accessibility + Window Manager overlay
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 font-mono text-xs font-bold text-purple-900">
                      03
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-800">Safeguard</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    &ldquo;Tell, Understand, Guide&rdquo; Loop
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    Strict step-by-step confirmation loops before any destructive or payment actions. Never triggers a transaction without explicit spoken verification: <em>&ldquo;You are booking a cab for ₹120. Should I confirm?&rdquo;</em>
                  </p>
                </div>
                <div className="mt-4 rounded-xl border border-purple-200/80 bg-purple-50/90 p-2 text-[11px] text-purple-950">
                  <span className="font-semibold text-purple-900">Safety metric: </span>
                  100% verbal confirmation before button execution
                </div>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-white">Core Engine:</strong> Multilingual Sarvam AI + Gemini LLM intent processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-white">Persistence:</strong> Draggable floating companion maintaining context across app switches</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-white">Zero-Fraud Safeguard:</strong> Explicit verbal confirmation before destructive actions</span>
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
                Resource-Constrained Systems
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Engineering Tradeoffs in Low-Bandwidth Environments
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Designing for elderly users in India requires rigorous compromises between model intelligence, network latency, and psychological comfort.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Tradeoff 1 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 sm:p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-950">
                      Tradeoff 01
                    </span>
                    <span className="text-xs font-semibold text-amber-900">Latency vs. Precision</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    Audio Latency vs. Cloud Guidance Depth
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    <strong>The Dilemma:</strong> Deep multimodal cloud LLM screen parsing requires 1.8s–2.5s over volatile 3G/4G Indian networks. Elderly users interpret a 2-second silence as a system crash and hang up.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border-l-4 border-amber-500 border border-amber-200 bg-amber-50/90 p-3.5 text-xs leading-relaxed text-amber-950">
                  <strong className="text-amber-900">The PM Decision:</strong> Implemented local on-device TTS audio caching for instantaneous acknowledgments (<strong>&lt;500ms</strong>) like <em>&ldquo;Checking your screen...&rdquo;</em> while asynchronous cloud parsing analyzes the screen hierarchy.
                </div>
              </div>

              {/* Tradeoff 2 */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 sm:p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-950">
                      Tradeoff 02
                    </span>
                    <span className="text-xs font-semibold text-amber-900">Assistance vs. Autonomy</span>
                  </div>
                  <h5 className="mt-3 text-base font-bold text-gray-900">
                    Assistance vs. Autonomy (Guide vs. Take Over)
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-700">
                    <strong>The Dilemma:</strong> Fully automating screen taps executes tasks faster, but creates continuous learned helplessness where users never build digital self-sufficiency.
                  </p>
                </div>
                <div className="mt-4 rounded-xl border-l-4 border-amber-500 border border-amber-200 bg-amber-50/90 p-3.5 text-xs leading-relaxed text-amber-950">
                  <strong className="text-amber-900">The PM Decision:</strong> Prioritized visual spotlights and spoken encouragement to guide the user&apos;s own finger. Robotic auto-execution is strictly reserved for tedious multi-field form inputs.
                </div>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span><strong className="text-white">Latency Defense:</strong> Local on-device TTS audio cached for &lt;500ms acoustic response</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span><strong className="text-white">Autonomy First:</strong> Visual spotlighting guides the user&apos;s tap rather than robotic takeover</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span><strong className="text-white">Impact Metric:</strong> 64% reduction in drop-offs; 82% reported higher self-reliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* 05 / Roadmap & Vision */}
          <div className="rounded-3xl border border-emerald-300/80 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all hover:border-emerald-400 hover:shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs font-mono font-bold tracking-wider text-emerald-950 uppercase">
                <Compass className="h-3.5 w-3.5" aria-hidden />
                05 / ROADMAP
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/90 px-3 py-0.5 text-xs font-semibold text-emerald-950 shadow-xs">
                Phase 1 ➔ Phase 3
              </span>
            </div>

            <h4 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Sequenced Roadmap: From Voice Assistant to Ambient Accessibility Layer
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Iterative scaling model balancing prototype feasibility with population-level digital literacy impact.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {/* Phase 1 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <span className="inline-flex items-center rounded-full bg-emerald-700 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  Phase 1 · Validated
                </span>
                <h5 className="mt-3 text-sm font-bold text-gray-900">
                  Live Prototype
                </h5>
                <ul className="mt-3 space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                    <span>Voice intent extraction with regional Hindi dialect tolerance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                    <span>Draggable floating companion maintaining cross-app state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                    <span>Multimodal IRCTC train ticket &amp; cab booking validation</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <span className="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  Phase 2 · In Development
                </span>
                <h5 className="mt-3 text-sm font-bold text-gray-900">
                  Full Screen-Parsing (Vision)
                </h5>
                <ul className="mt-3 space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-700" />
                    <span>Multimodal screen OCR &amp; real-time bounding box detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-700" />
                    <span>Autonomous error-dialog detection &amp; recovery prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-700" />
                    <span>Safe takeover for routine navigation and repetitive form taps</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm">
                <span className="inline-flex items-center rounded-full bg-purple-600 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                  Phase 3 · Scale
                </span>
                <h5 className="mt-3 text-sm font-bold text-gray-900">
                  Regional &amp; Public Scale
                </h5>
                <ul className="mt-3 space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-700" />
                    <span>Regional language expansion (Bengali, Tamil, Telugu, Marathi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-700" />
                    <span>Government pilot partnerships for national digital literacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-700" />
                    <span>Senior-banking &amp; healthcare assisted transaction SDKs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Executive Summary Bar (Dark High-Contrast) */}
            <div className="mt-6 rounded-2xl bg-slate-900/95 backdrop-blur-md p-4 text-slate-100 shadow-md">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">Phase 1:</strong> Validated prototype on IRCTC train &amp; Uber/Ola booking flows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">Phase 2:</strong> Multimodal screen OCR &amp; safe autonomous navigation recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span><strong className="text-white">Phase 3:</strong> Indic language expansion &amp; National Digital Literacy partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
