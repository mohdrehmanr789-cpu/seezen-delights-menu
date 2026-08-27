import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logoAsset from "@/assets/seezen-logo.png.asset.json";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/packages", label: "Packages" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur">
        
        <nav className="mx-auto flex max-w-5xl items-center justify-center gap-6 px-4 py-4 text-[0.7rem] uppercase tracking-[0.28em] sm:gap-10 sm:text-xs">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70 px-4 py-8 text-center">
        <div className="mx-auto mb-4 h-px w-24 gold-rule" />
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          © 2026 Seezen Caterers. All Rights Reserved.
        </p>
        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
          Chamanganj, Kanpur |{" "}
          <a href="tel:8957966999" className="text-foreground hover:text-gold">
            8957966999
          </a>
        </p>
      </footer>
    </div>
  );
}
