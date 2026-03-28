import { TrendingUp, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Smart Tracking",
    description:
      "Automatically monitor spending requirements and deadlines for all your active bonuses",
  },
  {
    icon: Bell,
    title: "Deadline Alerts",
    description:
      "Never miss a bonus deadline with timely push notifications and email reminders",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description:
      "Get green/yellow/red risk ratings so you always know exactly where you stand",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-primary text-xs font-semibold uppercase tracking-wider font-sans text-center">
          Features
        </p>

        {/* Headline */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold font-display text-foreground text-center leading-tight">
          Everything You Need to{" "}
          <span className="text-primary">Win at Bank Bonuses</span>
        </h2>

        <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto font-sans text-lg">
          Powerful tools designed to turn bonus hunting from stressful to effortless.
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:bg-bg-elevated transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-foreground text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
