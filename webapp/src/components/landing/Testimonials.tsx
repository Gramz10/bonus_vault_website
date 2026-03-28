import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    avatar: "MT",
    quote:
      "I had no idea bank bonuses were this easy. I followed the steps on my first one and got paid. Already working on my next bonus.",
    earned: "First bonus completed",
  },
  {
    name: "Sarah K.",
    avatar: "SK",
    quote:
      "Before this, I was trying to track everything in my notes and kept missing details. Now I know exactly what to do and when to do it.",
    earned: "No missed deadlines",
  },
  {
    name: "Gabriela R.",
    avatar: "GR",
    quote:
      "I usually have a few bonuses going at once now. The app keeps everything organized so I don't feel overwhelmed anymore.",
    earned: "Multiple bonuses tracked",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="w-4 h-4 fill-status-wait text-status-wait" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-primary text-xs font-semibold uppercase tracking-wider font-sans text-center">
          Testimonials
        </p>

        {/* Headline */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold font-display text-foreground text-center leading-tight">
          Real People. Real Bonuses.
        </h2>

        {/* Subhead stat */}
        <p className="mt-4 text-muted-foreground text-center max-w-md mx-auto font-sans text-lg">
          Join thousands of bonus hunters
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/20 hover:bg-bg-elevated transition-all duration-300"
            >
              {/* Green top border accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="mt-4 text-sm text-muted-foreground font-sans leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Earned badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs text-primary font-semibold font-sans">{t.earned}</span>
              </div>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-border/40 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary font-display">{t.avatar}</span>
                </div>
                <p className="text-sm font-semibold text-foreground font-sans">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
