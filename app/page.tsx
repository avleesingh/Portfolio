import Hero from "@/components/Hero";
import CaseStudyBeti from "@/components/CaseStudyBeti";
import CaseStudyDevWrap from "@/components/CaseStudyDevWrap";
import RoiCalculator from "@/components/RoiCalculator";
import Footer from "@/components/Footer";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "BETI AI", href: "#beti" },
  { label: "DevWrap", href: "#devwrap" },
  { label: "ROI Estimator", href: "#roi" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-200/80 via-purple-200/70 via-amber-200/60 via-emerald-200/70 via-teal-200/70 to-blue-200/80 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-xs">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3"
        >
          <a
            href="#hero"
            className="shrink-0 text-sm font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Avlee Singh
          </a>
          <ul className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-white/90 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <CaseStudyBeti />
        <CaseStudyDevWrap />
        <RoiCalculator />
      </main>

      <Footer />
    </div>
  );
}
