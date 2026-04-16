import { ArrowRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="blue-glow -bottom-48 -left-48 h-[720px] w-[720px] opacity-15" />
        <div className="blue-glow -top-64 -right-64 h-[640px] w-[640px] opacity-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative py-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <BrandLogo />
                <div className="leading-tight">
                  <div className="text-xl font-bold tracking-tight font-display text-white">SEO Group Buy</div>
                  <div className="text-xs text-zinc-500">Tools access. Team-ready. Fast.</div>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                Premium SEO tools at group buy pricing. Built for agencies, freelancers, and teams who want results without huge monthly bills.
              </p>

            </div>

            <div className="lg:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">Quick links</h4>
              <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-zinc-400">
                <a href="#features" className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
                  Features
                </a>
                <a href="#tools" className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
                  Tool list
                </a>
                <a href="#pricing" className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
                  Pricing
                </a>
                <a
                  href="mailto:support@seo-group-buy.in"
                  className="group inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors" />
                  Support
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">Stay updated</h4>
              <p className="mt-4 text-sm text-zinc-400">
                Get tool updates, maintenance alerts, and SEO tips.
              </p>

              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500/70"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-2 text-xs text-zinc-500">No spam.</p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/5 py-8">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p className="text-sm text-zinc-500">© 2024 SEO Group Buy. All rights reserved.</p>
            <p className="text-xs text-zinc-600">
              Built for agencies • freelancers • growth teams
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
