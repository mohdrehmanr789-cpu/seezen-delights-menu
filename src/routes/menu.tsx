import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
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

const categoryNav = [
  { id: "starters-veg", label: "Starters" },
  { id: "starters-nonveg", label: "Non-Veg" },
  { id: "mutton", label: "Main Course" },
  { id: "biryani", label: "Rice & Biryani" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Beverages" },
];

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

  const scrollTo = (id: string) => {
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SiteLayout>
      <div className="bg-[#171009] text-[#e9ddc9]">
        <section className="mx-auto max-w-5xl px-3 pt-6 pb-16 sm:px-6 sm:pt-10">
          <header className="text-center">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-[#c9a24b]">
              Digital Menu
            </p>
            <h1 className="mt-2 font-serif text-2xl font-semibold text-[#f3e9d2] sm:text-4xl">
              Huzee Caterers Menu
            </h1>
            <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-[#c9a24b] to-transparent" />
          </header>

          <div className="relative mx-auto mb-3 max-w-3xl">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-[#c9a24b]/70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes (e.g. Biryani, Korma, Paneer)..."
              aria-label="Search dishes"
              className="h-9 w-full rounded-md border border-[#3a2c1a] bg-[#211709] pr-4 pl-10 text-xs text-[#f3e9d2] outline-none placeholder:text-[#a08b66] focus:border-[#c9a24b] focus:ring-1 focus:ring-[#c9a24b]/30"
            />
          </div>

          {/* Quick category chips */}
          <div className="-mx-3 mb-2 flex gap-1.5 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:px-0">
            {categoryNav.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollTo(c.id)}
                className="h-6 shrink-0 rounded-full border border-[#3a2c1a] bg-[#211709] px-3 text-[0.55rem] font-medium uppercase tracking-[0.12em] text-[#d8c69b] transition-colors hover:border-[#c9a24b] hover:text-[#f3e9d2]"
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Category filter pills */}
          <div className="-mx-3 mb-6 flex gap-1.5 overflow-x-auto px-3 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0">
            {[{ id: "all", title: "All" }, ...menuCategories].map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={active === c.id}
                onClick={() => setActive(c.id)}
                className={`h-7 shrink-0 rounded-full px-3 text-[0.56rem] font-medium uppercase tracking-[0.12em] transition-colors ${
                  active === c.id
                    ? "bg-[#c9a24b] text-[#171009]"
                    : "border border-[#3a2c1a] bg-[#211709] text-[#d8c69b] hover:border-[#c9a24b]"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {categories.length === 0 ? (
            <p className="py-16 text-center text-sm text-[#a08b66]">
              No dishes match “{query}”.
            </p>
          ) : (
            <div className="space-y-8">
              {categories.map((cat) => (
                <article key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-20">
                  <h2 className="font-serif text-base font-semibold text-[#f3e9d2] sm:text-xl">
                    {cat.title}
                  </h2>
                  <div className="mt-1.5 mb-3 h-px w-full bg-gradient-to-r from-[#c9a24b]/60 via-[#3a2c1a] to-transparent" />
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
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </SiteLayout>
  );
}
