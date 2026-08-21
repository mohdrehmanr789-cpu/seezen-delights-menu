import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import vegDark from "@/assets/IMG-20260808-WA0022.jpg.asset.json";
import vegDarkAlt from "@/assets/IMG-20260808-WA0023.jpg.asset.json";
import royal900 from "@/assets/IMG-20260808-WA0024.jpg.asset.json";
import veg200 from "@/assets/IMG-20260808-WA0025.jpg.asset.json";
import mainCourse from "@/assets/IMG-20260808-WA0026.jpg.asset.json";
import classic from "@/assets/IMG-20260808-WA0027.jpg.asset.json";

type Pkg = { title: string; note: string; image: string };

const packages: Pkg[] = [
  { title: "Royal Non-Veg", note: "₹900 per plate • Unlimited food", image: royal900.url },
  { title: "Veg Special", note: "₹200 per plate • Unlimited food", image: veg200.url },
  { title: "Wedding Veg Menu", note: "Main course, starters, dessert & drinks", image: vegDark.url },
  { title: "Premium Veg Menu", note: "Celebrate with taste & elegance", image: vegDarkAlt.url },
  { title: "Classic Wedding Menu", note: "Starter, main course, desserts & drinks", image: classic.url },
  { title: "Main Course Menu", note: "Signature curries, biryani & breads", image: mainCourse.url },
];

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Wedding Packages — Seezen Caterers, Kanpur" },
      {
        name: "description",
        content:
          "Seezen Caterers wedding packages from ₹200 per plate with unlimited food — veg, non-veg and premium royal menus for Kanpur weddings and events.",
      },
      { property: "og:title", content: "Wedding Packages — Seezen Caterers" },
      {
        property: "og:description",
        content: "Veg, non-veg and royal wedding catering packages with unlimited food.",
      },
      { property: "og:image", content: royal900.url },
      { name: "twitter:image", content: royal900.url },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6">
        <header className="text-center">
          <p className="text-[0.62rem] uppercase tracking-[0.4em] text-gold">Seezen Caterers</p>
          <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
            Packages
          </h1>
          <div className="mx-auto my-6 h-px w-24 gold-rule" />
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            Tap any card to view the full package graphic.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <a
              key={pkg.title}
              href={pkg.image}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={pkg.image}
                  alt={`${pkg.title} — Seezen Caterers package card`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 text-center">
                <h2 className="text-base font-semibold uppercase tracking-[0.16em]">{pkg.title}</h2>
                <div className="mx-auto my-3 h-px w-12 gold-rule" />
                <p className="text-xs tracking-wide text-muted-foreground">{pkg.note}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gold/60 bg-secondary p-8 text-center">
          <h2 className="text-xl font-semibold uppercase tracking-[0.18em]">Book This Package</h2>
          <div className="mx-auto my-4 h-px w-16 gold-rule" />
          <p className="text-sm text-muted-foreground">88/502 Chamanganj, Kanpur</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:8957966999"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90"
            >
              Call 8957966999
            </a>
            <a
              href="mailto:seezencaterers@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3 text-xs uppercase tracking-[0.22em] hover:bg-card"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
