import { Search, Activity, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Verified Bonuses",
    description:
      "Explore 40+ active bank bonuses with full details, requirements, and direct application links — all in one place.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Track Your Progress",
    description:
      "Save bonuses you're working on and track your progress step-by-step. No spreadsheets needed.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Get Paid",
    description:
      "Complete the requirements, get your bonus, and move on to the next opportunity, without missing a beat.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-primary text-xs font-semibold uppercase tracking-wider font-sans text-center">
          How It Works
        </p>

        {/* Headline */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold font-display text-foreground text-center leading-tight">Three Steps to Start Earning Bank Bonuses</h2>

        <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto font-sans text-lg">
          Get up and running in minutes. No complicated setup, no spreadsheets.
        </p>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Dashed connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px border-t border-dashed border-primary/25" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center lg:items-center">
                  {/* Number + Icon */}
                  <div className="relative flex flex-col items-center">
                    <span className="font-display font-bold text-5xl text-primary/25 leading-none select-none mb-1">
                      {step.number}
                    </span>
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-primary/30 flex items-center justify-center shadow-lg shadow-black/30 mt-3 group-hover:border-primary/50 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Step connector for mobile */}
                    {i < steps.length - 1 && (
                      <div className="lg:hidden w-px h-10 border-l border-dashed border-primary/25 mt-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/8 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold font-sans">Start working towards your first bonus today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
