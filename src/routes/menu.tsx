import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { menuCategories } from "@/data/menu";
import { dishImage } from "@/data/dishImages";


export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Digital Menu — Seezen Caterers, Kanpur" },
      {
        name: "description",
        content:
          "Browse the full Seezen Caterers menu: veg and non-veg starters, mutton and chicken main course, biryani, breads, desserts, ice-cream, drinks and salads.",
      },
      { property: "og:title", content: "Digital Menu — Seezen Caterers" },
      {
        property: "og:description",
        content: "Full wedding catering menu with hundreds of dishes across 11 categories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const categories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuCategories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({ ...c, items: q ? c.items.filter((i) => i.toLowerCase().includes(q)) : c.items }))
      .filter((c) => c.items.length > 0);
  }, [query, active]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-3 pt-8 pb-16 sm:px-6 sm:pt-12">
        <header className="text-center">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.32em] text-gold">HUZEE CATERERS</p>
          <h1 className="mt-3 text-3xl font-semibold uppercase tracking-[0.06em] text-foreground sm:text-5xl">
            Digital Menu
          </h1>
          <div className="mx-auto my-5 h-px w-20 gold-rule" />
        </header>

        <div className="relative mx-auto mb-4 max-w-3xl">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-foreground/65" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes…"
            aria-label="Search dishes"
            className="h-10 w-full rounded-full border border-border bg-card pr-4 pl-10 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold/30"
          />
        </div>

        <div className="-mx-3 mb-7 flex gap-1.5 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0">
          {[{ id: "all", title: "All" }, ...menuCategories].map((c) => (
            <Button
              key={c.id}
              type="button"
              size="sm"
              variant={active === c.id ? "default" : "outline"}
              aria-pressed={active === c.id}
              onClick={() => setActive(c.id)}
              className="h-7 shrink-0 rounded-full px-3 text-[0.56rem] font-medium uppercase tracking-[0.12em] shadow-none"
            >
              {c.title}
            </Button>
          ))}
        </div>

        {categories.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No dishes match “{query}”.
          </p>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="rounded-lg border border-border bg-card px-2.5 py-4 sm:px-5 sm:py-6"
              >
                <h2 className="px-2 text-center text-base font-semibold uppercase tracking-[0.12em] text-foreground sm:text-xl">
                  {cat.title}
                </h2>
                <div className="mx-auto my-3.5 h-px w-12 gold-rule sm:my-5" />
                <ol className="grid grid-cols-2 gap-x-2 sm:gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
                  {cat.items.map((item, i) => (
                    <li
                      key={item}
                      className="grid min-h-14 grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-2 border-b border-border/60 py-1.5 sm:min-h-16 sm:grid-cols-[2.25rem_minmax(0,1fr)] sm:gap-2.5"
                    >
                      <img
                        src={dishImage(item, cat.id)}
                        alt={item}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="size-7 rounded-md border border-border object-cover sm:size-9"
                      />
                      <span className="min-w-0 text-[0.68rem] leading-tight text-foreground sm:text-xs">
                        <span className="mr-1 text-[0.56rem] text-gold">{i + 1}.</span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>

              </article>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
