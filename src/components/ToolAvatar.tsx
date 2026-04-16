import { clsx } from "clsx";

type ToolAvatarProps = {
  name: string;
  className?: string;
};

export function ToolAvatar({ name, className }: ToolAvatarProps) {
  const letter = (name.trim()[0] ?? "?").toUpperCase();

  return (
    <div
      className={clsx(
        "grid h-12 w-12 place-items-center rounded-xl bg-white/5 border border-white/10 text-white font-bold",
        className,
      )}
      aria-hidden="true"
    >
      <span className="text-sm">{letter}</span>
    </div>
  );
}

