"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Timer, Gauge, Target } from "lucide-react";

// Model assumptions (shown to the user below the results)
const BASELINE_DOWNTIME_SHARE = 0.2; // share of operating cost lost to downtime today
const FIXED_ONBOARDING_COST = 15000; // one-time setup cost ($)
const PER_MACHINE_ONBOARDING_COST = 1500; // per-machine onboarding cost ($)
const MAX_PAYBACK_MONTHS = 60;

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type SliderProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
};

function Slider({ id, label, value, min, max, step, display, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-gray-900">
          {label}
        </label>
        <span className="rounded-full border border-white/90 bg-white/90 px-3 py-0.5 text-sm font-bold tabular-nums text-gray-900 shadow-xs backdrop-blur-sm">
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
      />
    </div>
  );
}

export default function RoiCalculator() {
  const [machines, setMachines] = useState(10);
  const [monthlyCost, setMonthlyCost] = useState(8000);
  const [reduction, setReduction] = useState(20);

  const { annualSavings, paybackMonths, efficiencyGain, onboardingCost } =
    useMemo(() => {
      const annualOperatingCost = machines * monthlyCost * 12;
      const savings = annualOperatingCost * BASELINE_DOWNTIME_SHARE * (reduction / 100);
      const cost = FIXED_ONBOARDING_COST + PER_MACHINE_ONBOARDING_COST * machines;
      const payback = savings > 0 ? cost / (savings / 12) : Infinity;
      return {
        annualSavings: savings,
        paybackMonths: payback,
        efficiencyGain: BASELINE_DOWNTIME_SHARE * (reduction / 100) * 100,
        onboardingCost: cost,
      };
    }, [machines, monthlyCost, reduction]);

  const paybackLabel =
    paybackMonths > MAX_PAYBACK_MONTHS
      ? `${MAX_PAYBACK_MONTHS}+`
      : paybackMonths.toFixed(1);

  const results = [
    {
      icon: TrendingUp,
      label: "Estimated Annual Savings",
      value: usd.format(annualSavings),
    },
    {
      icon: Timer,
      label: "Payback Period (Months)",
      value: paybackLabel,
    },
    {
      icon: Gauge,
      label: "Efficiency Gain (%)",
      value: `${efficiencyGain.toFixed(1)}%`,
    },
  ];

  return (
    <section
      id="roi"
      className="scroll-mt-20 border-b border-slate-300/60 bg-gradient-to-b from-blue-200 via-indigo-100 to-slate-200 px-6 py-20 transition-colors duration-700 ease-in-out"
    >
      <div className="mx-auto max-w-5xl">
        {/* Top Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-md">
          <Calculator className="h-3.5 w-3.5 text-blue-700" aria-hidden />
          Sales Scoping &amp; MSME Tool
        </span>

        {/* Main Title */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          MSME Factory Scoping &amp; Downtime ROI Estimator
        </h2>

        {/* Context Subtitle */}
        <p className="mt-3 max-w-2xl text-lg font-medium text-gray-700">
          Built to solve a key friction point in manufacturing sales: translating complex factory operational downtime into instant, verifiable ROI for MSME business owners.
        </p>

        {/* Narrative / Problem Context Callout */}
        <div className="mt-6 rounded-2xl border border-white/90 bg-white/75 p-5 shadow-md backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800 shadow-xs">
              <Target className="h-4 w-4" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
                The Product &amp; Sales Context
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-800">
                When pitching digital transformation to factory owners, technical metrics often fail to land. I designed this interactive model to let stakeholders adjust machine counts and downtime targets in real-time, instantly visualizing payback periods and annual bottom-line savings.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-8 rounded-3xl border border-white/90 bg-white/75 backdrop-blur-xl p-6 md:p-8 shadow-lg">
            <Slider
              id="machines"
              label="Number of Machines"
              value={machines}
              min={1}
              max={50}
              step={1}
              display={String(machines)}
              onChange={setMachines}
            />
            <Slider
              id="monthly-cost"
              label="Monthly Operating Cost per Machine"
              value={monthlyCost}
              min={1000}
              max={20000}
              step={500}
              display={usd.format(monthlyCost)}
              onChange={setMonthlyCost}
            />
            <Slider
              id="reduction"
              label="Target Downtime Reduction"
              value={reduction}
              min={5}
              max={40}
              step={1}
              display={`${reduction}%`}
              onChange={setReduction}
            />
          </div>

          <div
            className="flex flex-col gap-4"
            aria-live="polite"
            aria-label="Calculated results"
          >
            {results.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-white/90 bg-white/85 backdrop-blur-md p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/90 bg-white shadow-xs">
                    <Icon className="h-5 w-5 text-gray-900" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-gray-700">
                    {label}
                  </span>
                </div>
                <motion.span
                  key={value}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl font-bold tabular-nums text-gray-900"
                >
                  {value}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-600">
          Assumptions: downtime currently accounts for{" "}
          {Math.round(BASELINE_DOWNTIME_SHARE * 100)}% of operating cost. Annual
          savings = machines × monthly cost × 12 × baseline downtime share ×
          target reduction. Onboarding cost is {usd.format(FIXED_ONBOARDING_COST)}{" "}
          plus {usd.format(PER_MACHINE_ONBOARDING_COST)} per machine (currently{" "}
          {usd.format(onboardingCost)}). Payback = onboarding cost ÷ monthly
          savings. Efficiency gain = baseline downtime share × target reduction.
        </p>
      </div>
    </section>
  );
}
