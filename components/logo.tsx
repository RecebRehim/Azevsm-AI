type LogoProps = {
  variant?: "full" | "mark";
  title: string;
  wordmark?: string;
};

export function Logo({ variant = "full", title, wordmark = "#0B1320" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 360 280"
      role="img"
      aria-label={title}
      className={variant === "mark" ? "logo-mark" : "logo-full"}
      style={{ width: variant === "mark" ? 48 : "100%", maxWidth: 280, height: "auto" }}
    >
      <title>{title}</title>
      <g transform="translate(180 108)">
        <polygon
          points="0,-96 83,-48 83,48 0,96 -83,48 -83,-48"
          fill="none"
          stroke="#1f5fbf"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          d="M0 -96 L0 0 M83 -48 L-83 48 M-83 -48 L83 48 M0 0 L0 96"
          fill="none"
          stroke="#1f5fbf"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <g transform="translate(0 2) scale(0.72)">
          <path
            d="M0 -46 L40 -23 L40 23 L0 46 L-40 23 L-40 -23 Z"
            fill="none"
            stroke="#c4a35a"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M0 -46 L0 0 L40 -23 M0 0 L-40 -23 M0 0 L0 46"
            fill="none"
            stroke="#c4a35a"
            strokeWidth="7"
            strokeLinejoin="round"
          />
        </g>
      </g>
      {variant === "full" ? (
        <g>
          <text
            x="180"
            y="232"
            textAnchor="middle"
            fill={wordmark}
            fontFamily="var(--font-sans), Manrope, sans-serif"
            fontSize="42"
            fontWeight="700"
          >
            AzeVsmAi
          </text>
          <line x1="54" y1="258" x2="118" y2="258" stroke="#c4a35a" strokeWidth="3" />
          <text
            x="180"
            y="264"
            textAnchor="middle"
            fill="#c4a35a"
            fontFamily="var(--font-sans), Manrope, sans-serif"
            fontSize="16"
            fontWeight="650"
            letterSpacing="6"
          >
            SYSTEMS
          </text>
          <line x1="242" y1="258" x2="306" y2="258" stroke="#c4a35a" strokeWidth="3" />
        </g>
      ) : null}
    </svg>
  );
}
