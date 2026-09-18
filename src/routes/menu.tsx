import { createFileRoute } from "@tanstack/react-router";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Search, SearchX } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { menuCategories } from "@/data/menu";
import { categoryFallback, dishImage } from "@/data/dishImages";

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

const serif = "font-[Playfair_Display,serif]";

const VEG_CATEGORIES = new Set([
  "starters-veg",
  "veg-main",
  "roti",
  "desserts",
  "ice-cream",
  "drinks",
  "salad",
]);

const chipGroups: Array<{ id: string; label: string; cats: string[] }> = [
  { id: "all", label: "All", cats: menuCategories.map((c) => c.id) },
  { id: "starters", label: "Starters", cats: ["starters-veg", "starters-nonveg"] },
  { id: "main", label: "Main Course", cats: ["mutton", "chicken", "veg-main"] },
  { id: "rice", label: "Rice & Biryani", cats: ["biryani"] },
  { id: "breads", label: "Roti / Naan", cats: ["roti"] },
  { id: "desserts", label: "Desserts", cats: ["desserts"] },
  { id: "icecream", label: "Ice Cream", cats: ["ice-cream"] },
  { id: "beverages", label: "Beverages", cats: ["drinks"] },
  { id: "salad", label: "Salad", cats: ["salad"] },
];

function MenuPage() {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState("all");
  const [vegOnly, setVegOnly] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const q = query.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    const group = chipGroups.find((g) => g.id === chip) ?? chipGroups[0]!;
    return menuCategories.filter(
      (c) => group.cats.includes(c.id) && (!vegOnly || VEG_CATEGORIES.has(c.id)),
    );
  }, [chip, vegOnly]);

  const selectedCategory = selected
    ? menuCategories.find((c) => c.id === selected)
    : undefined;

  const searchResults = useMemo(() => {
    if (!q) return null;
    return menuCategories
      .filter((c) => !vegOnly || VEG_CATEGORIES.has(c.id))
      .map((c) => ({
        category: c,
        items: c.items.filter((i) => i.toLowerCase().includes(q)),
      }))
      .filter((r) => r.items.length > 0);
  }, [q, vegOnly]);

  const openCategory = (id: string) => {
    setSelected(id);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalDishes = menuCategories.reduce((n, c) => n + c.items.length, 0);

  return (
    <SiteLayout>
      <div className="bg-[#f8f3e9] font-[DM_Sans,sans-serif] text-[#17120f]">
        <section className="mx-auto max-w-6xl px-4 pt-6 pb-16 sm:px-7 sm:pt-9">
          {/* Header */}
          <header className="mb-5 text-center">
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#a67c38]">
              Digital Menu
            </p>
            <h1 className={`${serif} mt-1 text-3xl font-bold text-[#3d2519] sm:text-4xl`}>
              Huzee Caterers
            </h1>
            <p className="mt-1 text-xs text-[#786e66]">
              {menuCategories.length} categories • {totalDishes} dishes
            </p>
          </header>

          {/* Search */}
          <div className="relative mx-auto mb-4 max-w-2xl">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-[#786e66]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes (e.g. Biryani, Korma, Paneer)..."
              aria-label="Search dishes"
              className="h-[52px] w-full rounded-2xl border border-[#e9ded0] bg-[#fdfaf5] pr-4 pl-12 text-sm text-[#17120f] outline-none transition placeholder:text-[#9b9188] focus:border-[#6f452d] focus:shadow-[0_0_0_3px_rgba(111,69,45,0.09)]"
            />
          </div>

          {/* Chips + Veg toggle */}
          <div className="mb-7 flex items-center justify-between gap-3">
            <div className="-mx-4 flex min-w-0 flex-1 gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0">
              {chipGroups.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    setChip(g.id);
                    setSelected(null);
                  }}
                  className={`h-9 shrink-0 rounded-full border px-3.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    chip === g.id && !selected
                      ? "border-[#6f452d] bg-[#6f452d] text-white"
                      : "border-[#e9ded0] bg-[#fffaf3] text-[#3d2519] hover:border-[#6f452d]"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            <label className="flex shrink-0 cursor-pointer items-center gap-2 text-[11px] font-bold">
              Veg Only
              <button
                type="button"
                role="switch"
                aria-checked={vegOnly}
                onClick={() => setVegOnly((v) => !v)}
                className={`relative h-[23px] w-10 rounded-full transition-colors ${vegOnly ? "bg-[#21863a]" : "bg-[#d4c8bc]"}`}
              >
                <span
                  className={`absolute top-[3px] left-[3px] size-[17px] rounded-full bg-white shadow transition-transform ${vegOnly ? "translate-x-[17px]" : ""}`}
                />
              </button>
            </label>
          </div>

          {q && searchResults ? (
            /* ---------- SEARCH RESULTS ---------- */
            searchResults.length === 0 ? (
              <EmptyState query={query} />
            ) : (
              <div className="space-y-8">
                {searchResults.map(({ category, items }) => (
                  <div key={category.id}>
                    <h2 className={`${serif} mb-3 text-xl font-bold text-[#3d2519]`}>
                      {category.title}
                      <span className="ml-2 font-[DM_Sans,sans-serif] text-xs font-semibold text-[#786e66]">
                        {items.length} dishes
                      </span>
                    </h2>
                    <DishGrid categoryId={category.id} items={items} veg={VEG_CATEGORIES.has(category.id)} />
                  </div>
                ))}
              </div>
            )
          ) : selectedCategory ? (
            /* ---------- DISH VIEW ---------- */
            <div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mb-4 inline-flex items-center gap-2 rounded-xl border border-[#e9ded0] bg-[#fffdf8] px-4 py-2.5 text-[13px] font-bold text-[#3d2519] transition-colors hover:bg-[#eadccc]"
              >
                <ArrowLeft className="size-4" />
                Back to Categories
              </button>

              <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0">
                {menuCategories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelected(c.id)}
                    className={`h-9 shrink-0 rounded-full border px-3.5 text-[11px] font-bold whitespace-nowrap transition-colors ${
                      selected === c.id
                        ? "border-[#6f452d] bg-[#6f452d] text-white"
                        : "border-[#e9ded0] bg-[#fffaf4] text-[#3d2519] hover:border-[#6f452d]"
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#a67c38]">
                  Our curated collection
                </p>
                <h2 className={`${serif} mt-1 text-2xl font-bold text-[#3d2519] sm:text-[27px]`}>
                  {selectedCategory.title}
                </h2>
                <p className="mt-1 text-xs text-[#786e66]">
                  Freshly prepared selections from Huzee Caterers • {selectedCategory.items.length} dishes
                </p>
              </div>

              <DishGrid
                categoryId={selectedCategory.id}
                items={selectedCategory.items}
                veg={VEG_CATEGORIES.has(selectedCategory.id)}
              />
            </div>
          ) : (
            /* ---------- CATEGORY GRID ---------- */
            <div>
              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#a67c38]">
                    Explore our selection
                  </p>
                  <h2 className={`${serif} mt-1 text-2xl font-bold text-[#3d2519] sm:text-[27px]`}>
                    Huzee Caterers Menu
                  </h2>
                </div>
                <p className="text-xs font-semibold whitespace-nowrap text-[#786e66]">
                  {visibleCategories.length} categories
                </p>
              </div>

              {visibleCategories.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                  {visibleCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => openCategory(cat.id)}
                      className="group relative h-[205px] overflow-hidden rounded-[19px] bg-[#3d2519] text-left text-white shadow-[0_10px_30px_rgba(78,48,28,0.08)] transition-transform duration-200 hover:-translate-y-1 sm:h-[235px]"
                    >
                      <img
                        src={categoryFallback[cat.id] ?? dishImage(cat.items[0] ?? "", cat.id)}
                        alt={cat.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-[rgba(25,13,7,0.9)] via-[rgba(25,13,7,0.4)] to-transparent" />
                      <span className="absolute top-3 right-3 grid size-7 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                        <ArrowUpRight className="size-4" />
                      </span>
                      <span className="absolute right-3 bottom-3.5 left-3.5">
                        <span className={`${serif} block text-lg leading-tight font-bold text-white`}>
                          {cat.title}
                        </span>
                        <span className="mt-1 block text-[10px] text-white/80">
                          {cat.items.length} dishes
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </SiteLayout>
  );
}

function DishGrid({
  categoryId,
  items,
  veg,
}: {
  categoryId: string;
  items: string[];
  veg: boolean;
}) {
  return (
    <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-h-[104px] items-center gap-3.5 rounded-[17px] border border-[#e9ded0] bg-[#fffdf8] p-2.5 shadow-[0_5px_18px_rgba(78,48,28,0.035)] transition hover:-translate-y-0.5 hover:border-[#d6c0aa]"
        >
          <img
            src={dishImage(item, categoryId)}
            alt={item}
            loading="lazy"
            width={512}
            height={512}
            className="size-[88px] shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0 flex-1">
            <span
              className={`mb-1.5 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${
                veg ? "bg-[#e7f4e8] text-[#176b2b]" : "bg-[#fbe9e7] text-[#a52520]"
              }`}
            >
              {veg ? "● Veg" : "● Non-Veg"}
            </span>
            <p className="text-[15px] leading-snug font-bold text-[#17120f]">{item}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function EmptyState({ query }: { query?: string }) {
  return (
    <div className="px-5 py-14 text-center text-[#786e66]">
      <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-[#eadccc] text-[#6f452d]">
        <SearchX className="size-6" />
      </div>
      <h3 className={`${serif} mb-1.5 text-xl font-bold text-[#3d2519]`}>No dishes found</h3>
      <p className="text-[13px]">
        {query ? `No dishes match “${query}”.` : "Try another search or select a different category."}
      </p>
    </div>
  );
}
