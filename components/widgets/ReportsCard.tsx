import { Badge, Card } from "../ui";

/**
 * Stock movement over a month, with the two events that actually matter
 * marked on the line: the day something ran out, and the day a delivery
 * put it back. Five reports exist; this is the shape of the first one.
 */
export default function ReportsCard() {
  return (
    <Card>
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[0.66rem] tracking-[0.2em] text-amber uppercase">
          Stock movement · 30 days
        </p>
        <Badge tone="good">exportable</Badge>
      </div>

      <svg
        viewBox="0 0 320 110"
        className="mt-6 w-full"
        role="img"
        aria-label="Stock movement over thirty days: a decline into a stock-out around day eleven, then a sharp recovery after a delivery on day nineteen."
      >
        <defs>
          <linearGradient id="rptFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC800" stopOpacity="0.35" />
            <stop offset="1" stopColor="#FFC800" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 66 L40 58 L80 72 L120 88 L160 80 L200 44 L240 52 L280 34 L320 40 L320 110 L0 110 Z"
          fill="url(#rptFill)"
        />
        <path
          d="M0 66 L40 58 L80 72 L120 88 L160 80 L200 44 L240 52 L280 34 L320 40"
          fill="none"
          stroke="#C4910C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="120" cy="88" r="4" fill="#B02A0E" />
        <circle cx="200" cy="44" r="4" fill="#086C1A" />
      </svg>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[0.64rem] text-ink/55">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-clay" />
          stock-out event
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-leaf" />
          delivery received
        </span>
      </div>
    </Card>
  );
}
