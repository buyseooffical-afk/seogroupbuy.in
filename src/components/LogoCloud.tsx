import { motion } from "motion/react";

const logos = [
  { name: "Ahrefs", domain: "ahrefs.com" },
  { name: "SEMrush", domain: "semrush.com" },
  { name: "Moz", domain: "moz.com" },
  { name: "Majestic", domain: "majestic.com" },
  { name: "SpyFu", domain: "spyfu.com" },
  { name: "Canva", domain: "canva.com" },
  { name: "Grammarly", domain: "grammarly.com" },
  { name: "Jasper", domain: "jasper.ai" },
];

export function LogoCloud() {
  return (
    <section className="py-12 bg-black border-y border-white/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-10">
          Popular Tools You Get Access To
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-500"
            >
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=64`}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-500 group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
