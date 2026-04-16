import { useEffect, useMemo, useState } from "react";
import { MessageCircle, X, Phone, Facebook } from "lucide-react";

type ChatWidgetProps = {
  whatsappLink?: string;
  facebookLink?: string;
};

export function ChatWidget({
  whatsappLink,
  facebookLink,
}: ChatWidgetProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const items = useMemo(
    () => [
      {
        id: "whatsapp",
        label: "WhatsApp",
        description: "Chat with support",
        href: whatsappLink,
        Icon: Phone,
        accent: "text-green-400",
      },
      {
        id: "facebook",
        label: "Facebook",
        description: "Message our page",
        href: facebookLink,
        Icon: Facebook,
        accent: "text-blue-400",
      },
    ],
    [facebookLink, whatsappLink],
  );

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <div className="mb-3 w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="leading-tight">
              <div className="text-sm font-bold text-white">Chat with us</div>
              <div className="text-[11px] text-zinc-400">Avg reply: a few minutes</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close chat widget"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-3">
            <div className="grid gap-2">
              {items.map(({ id, href, label, description, Icon, accent }) => {
                const enabled = Boolean(href);
                const Wrapper: any = enabled ? "a" : "button";
                return (
                  <Wrapper
                    key={id}
                    {...(enabled
                      ? { href, target: "_blank", rel: "noopener noreferrer" }
                      : { type: "button", disabled: true })}
                    className={[
                      "group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 transition-colors",
                      enabled ? "hover:bg-white/10" : "opacity-60 cursor-not-allowed",
                    ].join(" ")}
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10">
                      <Icon className={`h-5 w-5 ${accent}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">{label}</div>
                      <div className="text-xs text-zinc-400">
                        {enabled ? description : "Link not set yet"}
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-zinc-400 group-hover:text-white transition-colors">
                      <span className="text-sm">→</span>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
            <div className="mt-3 text-[11px] text-zinc-500 px-1">
              Tip: Press <span className="text-zinc-300 font-semibold">Esc</span> to close.
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex h-14 items-center gap-3 rounded-full bg-blue-600 px-5 text-white shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-colors"
        aria-label={open ? "Close chat widget" : "Open chat widget"}
      >
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div className="text-left leading-tight">
          <div className="text-sm font-bold">{open ? "Close" : "Chat"}</div>
          <div className="text-[11px] text-white/80">WhatsApp / Facebook</div>
        </div>
      </button>
    </div>
  );
}

