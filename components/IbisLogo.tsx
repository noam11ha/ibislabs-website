/**
 * IbisLogo — line-art ibis bird SVG icon matching the official Ibis Labs logo.
 * The ibis faces right, standing. Key elements:
 *   - Round head (upper-left)
 *   - Long downward-curved bill (the ibis signature)
 *   - S-curve neck connecting head to body
 *   - Elongated oval body (center-right)
 *   - Wing detail lines across the body
 *   - Two thin legs with feet
 * Line-art style: stroke only, no fill — renders as currentColor silhouette.
 */
export function IbisBirdMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Head */}
      <circle cx="10" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      {/* Bill — long downward-curved ibis bill */}
      <path
        d="M 14 8 C 24 2, 38 8, 40 26"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Neck — S-curve from head base to body */}
      <path
        d="M 10 13.5 C 10 19, 15 21, 18 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Body — elongated oval, slightly tilted */}
      <ellipse
        cx="26"
        cy="27"
        rx="13"
        ry="8.5"
        transform="rotate(-12 26 27)"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* Wing detail line */}
      <path
        d="M 16 27 Q 26 24, 36 28"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Legs */}
      <line x1="22" y1="34.5" x2="20" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="34.5" x2="26" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Feet */}
      <path d="M 17 42 L 20 42 L 23 40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 23 42 L 26 42 L 29 40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** Full logotype: bird mark + wordmark in Playfair Display */
export default function IbisLogoFull({
  markColor = "currentColor",
  textColor = "#ffffff",
  accentColor = "#00D4FF",
}: {
  markColor?: string;
  textColor?: string;
  accentColor?: string;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <span style={{ color: markColor }}>
        <IbisBirdMark />
      </span>
      <span
        style={{
          color: textColor,
          fontSize: "17px",
          fontWeight: 800,
          fontFamily: "var(--font-playfair)",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        Ibis <span style={{ color: accentColor }}>Labs</span>
      </span>
    </span>
  );
}
