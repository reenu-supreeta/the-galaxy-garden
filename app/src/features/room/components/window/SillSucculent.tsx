/** Renders one small succulent perched at the outer right end of the window sill. */
export function SillSucculent() {
  return (
    <div
      className="absolute right-[-1.875rem] bottom-[-1.75rem] z-20 h-[68px] w-[30px]"
      aria-label="Small succulent"
    >
      <svg viewBox="0 0 30 68" className="h-full w-full" role="img" aria-hidden="true">
        {/* The 40-pixel plant remains beyond the glass edge, so the night view stays clear. */}
        <g fill="#52704d">
          <ellipse cx="9" cy="24" rx="4" ry="12" transform="rotate(-42 9 24)" />
          <ellipse cx="21" cy="24" rx="4" ry="12" transform="rotate(42 21 24)" />
          <ellipse cx="15" cy="15" rx="4" ry="14" />
          <ellipse cx="10" cy="29" rx="3.5" ry="9" transform="rotate(-66 10 29)" />
          <ellipse cx="20" cy="29" rx="3.5" ry="9" transform="rotate(66 20 29)" />
        </g>

        {/* The pot is exactly 30 by 28 pixels and aligns with the sill's outer end. */}
        <path d="M0 40h30l-3 28H3Z" fill="#80513a" />
        <path d="M0 40h30v4H0Z" fill="#aa7553" opacity="0.62" />
      </svg>
    </div>
  )
}
