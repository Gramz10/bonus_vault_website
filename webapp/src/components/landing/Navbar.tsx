import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-all duration-300">
            <img src="/icon.png" alt="Bonus Vault" className="w-14 h-14 object-cover" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-foreground text-base tracking-tight">
              Bonus Vault
            </span>
            <span className="text-[10px] text-muted-foreground font-sans">by Horizon Labs LLC</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary/50"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_16px_rgba(74,222,128,0.2)] hover:shadow-[0_0_24px_rgba(74,222,128,0.35)] transition-all duration-300"
            onClick={() => handleNavClick("#contact")}
          >
            Download App
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-foreground"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-card border-border/50 w-72"
          >
            <div className="flex flex-col gap-1 mt-8">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200 animate-slide-in-right"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 px-4">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_16px_rgba(74,222,128,0.2)]"
                  onClick={() => handleNavClick("#contact")}
                >
                  Download App
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
