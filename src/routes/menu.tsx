import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
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
      <section className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6">
        <header className="text-center">
          <p className="text-[0.62rem] uppercase tracking-[0.4em] text-gold">Seezen Caterers</p>
          <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
            Digital Menu
          </h1>
          <div className="mx-auto my-6 h-px w-24 gold-rule" />
        </header>

        <div className="relative mb-5">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes…"
            aria-label="Search dishes"
            className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm outline-none placeholder:text-muted-foreground focus:border-gold"
          />
        </div>

        <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
          {[{ id: "all", title: "All" }, ...menuCategories].map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] transition-colors ${
                active === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {categories.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No dishes match “{query}”.
          </p>
        ) : (
          <div className="space-y-10">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="rounded-2xl border border-border bg-card p-5 sm:p-7"
              >
                <h2 className="text-center text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl">
                  {cat.title}
                </h2>
                <div className="mx-auto my-5 h-px w-16 gold-rule" />
                <ol className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-border/50 py-2 text-sm last:border-b-0"
                    >
                      <span className="w-6 shrink-0 text-right text-[0.7rem] text-gold">
                        {i + 1}.
                      </span>
                      <img
                        src={dishImage(item, cat.id)}
                        alt={item}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="size-10 shrink-0 rounded-lg border border-border/60 object-cover"
                      />
                      <span className="min-w-0">{item}</span>
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
