import { createFileRoute, Link } from "@tanstack/react-router";
import { UtensilsCrossed, PackageOpen } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import logoAsset from "@/assets/seezen-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seezen Caterers — Wedding & Event Catering in Kanpur" },
      {
        name: "description",
        content:
          "Seezen Caterers, Chamanganj Kanpur. Wedding, catering and event menus with unlimited food packages. View our digital menu and packages.",
      },
      { property: "og:title", content: "Seezen Caterers — Wedding Catering, Kanpur" },
      {
        property: "og:description",
        content: "Wedding • Catering • Events. Explore our digital menu and package gallery.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-24">
        <img
          src="/favicon.png"
          alt="Seezen Caterers logo"
          width={220}
          height={330}
          className="mb-8 h-28 w-auto sm:h-36"
        />
        <p className="text-[0.62rem] uppercase tracking-[0.4em] text-gold">We Serve Memories</p>
        <div className="my-6 h-px w-28 gold-rule" />
        <h1 className="text-4xl leading-tight font-semibold tracking-[0.06em] uppercase sm:text-6xl">
          Seezen Caterers
        </h1>
        <p className="mt-5 text-xs uppercase tracking-[0.32em] text-muted-foreground sm:text-sm">
          Wedding • Catering • Events
        </p>
        <div className="my-8 h-px w-28 gold-rule" />

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <UtensilsCrossed className="size-4 shrink-0" />
            View Menu
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-secondary"
          >
            <PackageOpen className="size-4 shrink-0" />
            View Packages
          </Link>
        </div>

        <p className="mt-12 max-w-md text-sm leading-relaxed text-muted-foreground">
          Good food, great memories, perfect events — served across Kanpur for weddings,
          receptions and celebrations of every size.
        </p>
      </section>
    </SiteLayout>
  );
}
