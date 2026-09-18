import { useCallback, useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/SiteLayout'

export const Route = createFileRoute('/packages')({
  head: () => ({
    meta: [
      { title: 'Huzee Caterers | Packages' },
      {
        name: 'description',
        content:
          'Explore Huzee Caterers curated catering packages — thoughtfully designed for your memorable celebrations.',
      },
      { property: 'og:title', content: 'Huzee Caterers | Packages' },
      {
        property: 'og:description',
        content:
          'Explore Huzee Caterers curated catering packages — thoughtfully designed for your memorable celebrations.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: PackagesPage,
})

type Pkg = { number: string; image: string }

const packages: Pkg[] = [
  { number: 'Package 01', image: 'https://i.ibb.co/7t90QxFd/IMG-20260816-WA0012.jpg' },
  { number: 'Package 02', image: 'https://i.ibb.co/WNSM0Jdh/IMG-20260816-WA0011.jpg' },
  { number: 'Package 03', image: 'https://i.ibb.co/v6zmcn9j/package-6.jpg' },
  { number: 'Package 04', image: 'https://i.ibb.co/xScLJYXp/package-3.jpg' },
  { number: 'Package 05', image: 'https://i.ibb.co/1GnCx3hV/package-4.jpg' },
  { number: 'Package 06', image: 'https://i.ibb.co/gbsM958t/package-5.jpg' },
]

function PackagesPage() {
  const [active, setActive] = useState<Pkg | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close])

  return (
    <SiteLayout>
      <section className="w-full bg-[#f8f3e9] px-5 py-20 sm:px-[18px] md:px-5 md:py-[65px]">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mx-auto mb-11 max-w-[680px] text-center">
            <span className="mb-[13px] inline-block text-[11px] font-bold uppercase tracking-[3px] text-[#9a6c48]">
              Huzee Caterers
            </span>
            <h1 className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(32px,5vw,52px)] font-medium leading-[1.15] text-[#3d2519]">
              Our Catering Packages
            </h1>
            <p className="mx-auto mt-[18px] max-w-[580px] text-[15px] leading-[1.8] text-[#795f4c]">
              Explore our specially curated catering packages, thoughtfully
              designed for your memorable celebrations.
            </p>
            <div className="mx-auto mt-[22px] h-[2px] w-[60px] bg-[#a87b55]" />
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[18px] lg:grid-cols-3 lg:gap-[25px]">
            {packages.map((pkg) => (
              <article
                key={pkg.number}
                tabIndex={0}
                role="button"
                aria-label={`Open ${pkg.number}`}
                onClick={() => setActive(pkg)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActive(pkg)
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-[15px] border border-[#6f452d]/15 bg-[#fffaf3] shadow-[0_10px_28px_rgba(61,37,25,0.08)] outline-none transition-[transform,box-shadow] duration-300 focus-visible:shadow-[0_0_0_3px_#f8f3e9,0_0_0_6px_#8c6244] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(61,37,25,0.16)] md:rounded-[22px]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e9dece] md:aspect-[4/5]">
                  <img
                    src={pkg.image}
                    alt={`Huzee Caterers ${pkg.number}`}
                    loading="lazy"
                    className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#28180f]/50 via-[#28180f]/[0.04] to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-[9px] left-[9px] z-2 rounded-full border border-white/25 bg-[#3d2519]/86 px-[9px] py-[6px] text-[8px] font-bold uppercase tracking-[0.8px] text-white backdrop-blur-md md:bottom-[17px] md:left-[18px] md:px-[14px] md:py-[9px] md:text-[10px] md:tracking-[1.4px]">
                    {pkg.number}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#140c08]/95 p-3 md:p-[25px]"
          role="dialog"
          aria-modal="true"
          aria-label="Package image preview"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[26px] font-light leading-none text-white transition-colors hover:bg-white/25 md:right-[22px] md:top-[18px] md:h-[46px] md:w-[46px] md:text-[30px]"
          >
            &times;
          </button>
          <img
            src={active.image}
            alt={`${active.number} large preview`}
            className="max-h-[87vh] max-w-full rounded-md object-contain shadow-[0_25px_80px_rgba(0,0,0,0.5)] md:max-h-[90vh] md:max-w-[94vw] md:rounded-[10px]"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-[13px] left-1/2 max-w-[90%] -translate-x-1/2 text-center text-[9px] font-semibold uppercase tracking-[1.2px] text-white md:bottom-[22px] md:text-[11px] md:tracking-[2px]">
            {active.number}
          </div>
        </div>
      )}
    </SiteLayout>
  )
}
