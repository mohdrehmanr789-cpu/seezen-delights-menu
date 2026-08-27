import { createFileRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/SiteLayout'

export const Route = createFileRoute('/packages')({
  component: PackagesPage,
})

type Pkg = { title: string; note: string; image: string }

const packages: Pkg[] = [
  { title: "Standard Menu", note: "Rs 450 per plate + Unlimited food", image: "/package-1.jpg" },
  { title: "Classic Menu", note: "Rs 550 per plate, starter, dessert & drink", image: "/package-2.jpg" },
  { title: "Wedding Menu", note: "Signature curries, biryani & bakes", image: "/package-3.jpg" },
  { title: "Corporate Menu", note: "Starter, Main course, desserts & drinks", image: "/package-4.jpg" },
  { title: "Premium Menu", note: "Signature starter, biryani & bakes", image: "/package-5.jpg" },
  { title: "Vip Course Menu", note: "Signature curries, biryani & bakes", image: "/package-6.jpg" },
]

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
                  alt={`${pkg.title} - Seezen Caterers package card`}
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
          <h2 className="text-xl font-semibold uppercase tracking-[0.16em]">Book This Package</h2>
          <div className="mx-auto my-4 h-px w-16 gold-rule" />
          <p className="text-sm text-muted-foreground">88/502 Chaman Ganj, Kanpur</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:8957066099"
              className="inline-flex items-center justify-center rounded-full primary-bg px-5 py-2 text-sm uppercase tracking-wider"
            >
              Call 8957066099
            </a>
            <a
              href="mailto:seezen@caterer.com"
              className="inline-flex items-center justify-center rounded-full border border-gold px-5 py-2 text-sm uppercase tracking-wider"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
