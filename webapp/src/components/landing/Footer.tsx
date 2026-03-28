import { Link } from "react-router-dom";

const footerLinks: Record<string, { label: string; href: string; route?: boolean }[]> = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#contact" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Privacy Policy", href: "/privacy", route: true },
    { label: "Terms", href: "/terms", route: true },
  ],
  Support: [
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/30 pt-14 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/icon.png" alt="Bonus Vault" className="w-14 h-14 object-cover" />
              </div>
              <span className="font-display font-bold text-foreground text-sm">Bonus Vault</span>
            </div>
            <p className="text-xs text-muted-foreground font-sans leading-relaxed max-w-[180px]">
              Maximize every bank bonus. Built by Horizon Labs LLC.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider font-sans mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.route ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-sans"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-sans text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-sans">
            &copy; {new Date().getFullYear()} Horizon Labs LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <img src="/icon.png" alt="Bonus Vault" className="w-7 h-7 object-cover rounded-sm" />
            <span className="text-xs text-muted-foreground font-sans">Bonus Vault</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
