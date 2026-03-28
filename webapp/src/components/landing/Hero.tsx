import { Apple, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$4,200", label: "avg earned / year" },
  { value: "40+", label: "active offers" },
  { value: "$300", label: "avg bonus" },
];

const bonuses = [
  {
    name: "Chase",
    bonus: "$500 bonus",
    spent: "$3,200 / $4,000",
    pct: 80,
    status: "safe" as const,
    daysLeft: 42,
  },
  {
    name: "Citi",
    bonus: "$300 bonus",
    spent: "$1,100 / $1,500",
    pct: 73,
    status: "wait" as const,
    daysLeft: 18,
  },
  {
    name: "Discover",
    bonus: "$200 bonus",
    spent: "$450 / $500",
    pct: 90,
    status: "safe" as const,
    daysLeft: 30,
  },
];

const statusConfig = {
  safe: {
    label: "On Track",
    dot: "bg-status-safe",
    bar: "bg-status-safe",
    text: "text-status-safe",
  },
  wait: {
    label: "Needs Attention",
    dot: "bg-status-wait",
    bar: "bg-status-wait",
    text: "text-status-wait",
  },
  risk: {
    label: "At Risk",
    dot: "bg-status-risk",
    bar: "bg-status-risk",
    text: "text-status-risk",
  },
};

function AppMockup() {
  return (
    <div className="animate-glow-green animate-float w-full max-w-sm mx-auto rounded-2xl border border-border/60 bg-card overflow-hidden shadow-2xl shadow-black/50">
      {/* App Header */}
      <div className="px-5 pt-5 pb-4 border-b border-border/40">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-sans">Active Bonuses</p>
            <p className="text-lg font-display font-bold text-foreground mt-0.5">
              3 in progress
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground font-sans">Total potential</p>
            <p className="text-base font-bold text-status-safe font-display">$1,000</p>
          </div>
        </div>
      </div>

      {/* Bonus Items */}
      <div className="divide-y divide-border/30">
        {bonuses.map((bonus) => {
          const cfg = statusConfig[bonus.status];
          return (
            <div key={bonus.name} className="px-5 py-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${cfg.dot} flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground font-sans">
                      {bonus.name}
                    </p>
                    <p className="text-xs text-muted-foreground font-sans">{bonus.bonus}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-medium ${cfg.text} font-sans`}>
                    {cfg.label}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">{bonus.daysLeft}d left</p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1 font-sans">
                  <span>{bonus.spent}</span>
                  <span>{bonus.pct}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cfg.bar} transition-all duration-1000`}
                    style={{ width: `${bonus.pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="px-5 py-3 bg-secondary/40 flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-sans">Last synced: just now</span>
        <span className="text-xs text-primary font-semibold font-sans">View All</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(207 15% 13% / 0.8) 0%, hsl(207 14% 7%) 70%)",
          }}
        />
        {/* Green glow orb bottom right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-primary translate-x-1/3 translate-y-1/3" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-semibold font-sans tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get Paid to Open Bank Accounts
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight max-w-4xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Earn $100–$500+ Bank Bonuses —{" "}
          <span className="text-primary">Without Missing a Step</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-sans animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          We track every offer, show you exactly what to do, and help you get paid faster.
        </p>

        {/* CTAs */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-[0_0_24px_rgba(74,222,128,0.25)] hover:shadow-[0_0_36px_rgba(74,222,128,0.4)] transition-all duration-300 h-12"
          >
            <Apple className="w-4 h-4 mr-2" />
            Start Earning on iOS
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border/60 text-foreground hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 h-12 px-8"
            onClick={() => handleScroll("#features")}
          >
            Learn More
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-border/40 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm overflow-hidden animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-8 py-4 sm:py-5">
              <span className="font-display font-bold text-2xl text-primary">{stat.value}</span>
              <span className="text-xs text-muted-foreground mt-1 font-sans">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Micro trust text */}
        <p className="mt-3 text-xs text-muted-foreground/50 font-sans">
          Bonus amounts vary. Requirements apply. Always verify with the bank.
        </p>

        {/* App Mockup */}
        <div
          className="mt-16 w-full max-w-sm mx-auto animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
