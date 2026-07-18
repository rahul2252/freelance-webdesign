export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 56"
      className={className}
      role="img"
      aria-label="BLR Webdesign"
    >
      {/* offset brutalist shadow behind the badge */}
      <rect x="9" y="9" width="46" height="46" rx="9" fill="#FF3DBB" transform="rotate(-8 32 32)" />
      {/* tilted acid badge */}
      <rect
        x="3"
        y="3"
        width="46"
        height="46"
        rx="9"
        fill="#D6FF3F"
        stroke="#0A0A0A"
        strokeWidth="3"
        transform="rotate(-8 26 26)"
      />
      {/* code-bracket mark "<>", counter-rotated upright */}
      <g transform="rotate(-8 26 26)">
        <g transform="rotate(8 26 26)">
          <polyline
            points="24,13 11,26 24,39"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="28,13 41,26 28,39"
            fill="none"
            stroke="#FF3DBB"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* two-tone wordmark */}
      <text
        x="66"
        y="34"
        fontFamily="var(--font-display), sans-serif"
        fontWeight={900}
        fontSize="22"
        letterSpacing="0.5"
      >
        <tspan fill="#D6FF3F">BLR</tspan>
        <tspan fill="#F5F5F0"> WEBDESIGN</tspan>
      </text>
    </svg>
  );
}
