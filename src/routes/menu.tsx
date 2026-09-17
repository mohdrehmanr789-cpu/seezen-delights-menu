import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { menuCategories } from "@/data/menu";
import { dishImage } from "@/data/dishImages";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Digital Menu — Huzee Caterers, Kanpur" },
      {
        name: "description",
        content:
          "Browse the full Huzee Caterers menu: veg and non-veg starters, mutton and chicken main course, biryani, breads, desserts, ice-cream, drinks and salads.",
      },
      { property: "og:title", content: "Digital Menu — Huzee Caterers" },
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
  const [open, setOpen] = useState<string | null>(null);

  const q = query.trim().toLowerCase();

  const categories = useMemo(() => {
    if (!q) return menuCategories;
    return menuCategories
      .map((c) => ({ ...c, items: c.items.filter((i) => i.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length > 0);
  }, [q]);

  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id));

  return (
    <SiteLayout>
      <div className="bg-[#171009] text-[#e9ddc9]">
        <section className="mx-auto max-w-3xl px-3 pt-6 pb-16 sm:px-6 sm:pt-10">
          <header className="text-center">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-[#c9a24b]">
              Digital Menu
            </p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-[#f3e9d2] sm:text-4xl">
              Huzee Caterers Menu
            </h1>
            <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent" />
          </header>

          <div className="relative mx-auto mb-6 max-w-xl">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-[#c9a24b]/70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes (e.g. Biryani, Korma, Paneer)..."
              aria-label="Search dishes"
              className="h-9 w-full rounded-md border border-[#3a2c1a] bg-[#211709] pr-4 pl-10 text-xs text-[#f3e9d2] outline-none placeholder:text-[#a08b66] focus:border-[#c9a24b] focus:ring-1 focus:ring-[#c9a24b]/30"
            />
          </div>

          {categories.length === 0 ? (
            <p className="py-16 text-center text-sm text-[#a08b66]">
              No dishes match “{query}”.
            </p>
          ) : (
            <div className="space-y-3">
              {categories.map((cat) => {
                const isOpen = q ? true : open === cat.id;
                return (
                  <article
                    key={cat.id}
                    className="overflow-hidden rounded-xl border border-[#3a2c1a] bg-[#211709]"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(cat.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-[#2a1d0d]"
                    >
                      <div className="min-w-0">
                        <h2 className="font-display text-sm font-semibold text-[#f3e9d2] sm:text-lg">
                          {cat.title}
                        </h2>
                        <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-[#a08b66]">
                          {cat.items.length} dishes
                        </p>
                      </div>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#c9a24b]/40 text-[#c9a24b]">
                        <ChevronDown
                          className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#3a2c1a] px-3 py-2 sm:px-4">
                        <ol className="grid grid-cols-2 gap-x-4 sm:gap-x-8">
                          {cat.items.map((item, i) => (
                            <li
                              key={item}
                              className="grid min-h-12 grid-cols-[1.9rem_minmax(0,1fr)] items-center gap-2 border-b border-[#2c2113] py-1.5"
                            >
                              <img
                                src={dishImage(item, cat.id)}
                                alt={item}
                                loading="lazy"
                                width={512}
                                height={512}
                                className="size-8 rounded-md border border-[#3a2c1a] object-cover"
                              />
                              <span className="min-w-0 text-[0.66rem] leading-tight text-[#e9ddc9]">
                                <span className="mr-1 text-[0.56rem] text-[#c9a24b]">{i + 1}.</span>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </SiteLayout>
  );
}
