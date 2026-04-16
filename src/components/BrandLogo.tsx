import { clsx } from "clsx";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  label?: string;
};

export function BrandLogo({
  className,
  markClassName,
  label = "SEO Group Buy",
}: BrandLogoProps) {
  return (
    <div className={clsx("inline-flex items-center gap-3", className)} aria-label={label}>
      <div
        className={clsx(
          "relative grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20",
          markClassName,
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 40 40"
          className="h-7 w-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8 13.1c-1.7-1.8-4.1-2.9-6.8-2.9-5.2 0-9.4 3.7-9.4 8.3 0 2.2 1 4.2 2.7 5.7"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M25.7 15.4c-1.1-1.2-2.7-2-4.6-2-3.4 0-6.2 2.2-6.2 5 0 1.4.7 2.7 1.8 3.6"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M16.8 23.9c1.1 1.2 2.7 2 4.6 2 3.4 0 6.2-2.2 6.2-5 0-1.4-.7-2.7-1.8-3.6"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M12.2 26.9c1.7 1.8 4.1 2.9 6.8 2.9 5.2 0 9.4-3.7 9.4-8.3 0-2.2-1-4.2-2.7-5.7"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M27.8 27.7l3 3"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
