import Image from "next/image";
import markColor from "@/public/logo-mark.png";
import markLight from "@/public/logo-mark-light.png";

type Variant = "color" | "light";

/**
 * The real InventiX mark.
 *
 * - logo-mark.png        maroon + gold, for light backgrounds
 * - logo-mark-light.png  cream + gold, for the dark ink backgrounds
 *
 * Both are transparent and cropped tight to the artwork, so `h-8 w-auto`
 * gives a mark that optically matches the wordmark beside it.
 */
export function LogoMark({
  className = "h-8 w-auto",
  variant = "color",
  priority = false,
}: {
  className?: string;
  variant?: Variant;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "light" ? markLight : markColor}
      alt=""
      aria-hidden="true"
      priority={priority}
      className={className}
    />
  );
}

export function Logo({
  variant = "color",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-auto" variant={variant} priority />
      <span
        className={`text-[1.35rem] font-extrabold tracking-[-0.03em] ${
          variant === "light" ? "text-paper" : "text-maroon"
        }`}
      >
        Inventi<span className="text-gold">X</span>
      </span>
    </span>
  );
}
