/** Generates a calm, layered natural night landscape for the window exterior. */
export function NightBackdrop() {
  // A deterministic star field gives the landscape hundreds of varied points of light.
  const stars = Array.from({ length: 240 }, (_, index) => ({
    x: (index * 137 + (index % 11) * 19) % 1000,
    y: 12 + ((index * 71 + (index % 7) * 23) % 390),
    radius: 0.7 + ((index * 13) % 10) / 10,
    opacity: 0.28 + ((index * 17) % 65) / 100,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#040a1b] via-[#0b1b3e] to-[#36517b]">
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* The stars vary in size and opacity, while remaining soft and unobtrusive. */}
        <g fill="#d3d9d1">
          {stars.map((star, index) => (
            <circle
              key={index}
              cx={star.x}
              cy={star.y}
              r={star.radius}
              opacity={star.opacity}
            />
          ))}
        </g>

        {/* A small crescent moon is set high in the calm, open sky. */}
        <path d="M792 74a50 50 0 1 0 42 78 55 55 0 1 1-42-78Z" fill="#ddd5b8" opacity="0.88" />

        {/* Distant hills create depth above the horizon without introducing buildings. */}
        <path d="M0 458C116 420 195 438 293 402c91-33 154-17 250 21 104 41 191 9 278-24 64-24 127-13 179 4v139H0Z" fill="#172944" />
        <path d="M0 487c106-51 218-17 326-40 111-24 158-63 276-27 126 39 198 8 398-7v187H0Z" fill="#0d1e31" />

        {/* Layered conifers form a quiet foreground treeline. */}
        <g fill="#091522">
          <path d="M0 510l34-85 34 85h-18l31 90H0Z" />
          <path d="M72 540l27-68 27 68h-13l24 60H54Z" />
          <path d="M136 521l42-106 42 106h-22l33 79h-109Z" />
          <path d="M245 548l31-77 31 77h-16l25 52h-85Z" />
          <path d="M328 526l44-111 44 111h-23l34 74H315Z" />
          <path d="M470 544l30-75 30 75h-15l23 56h-79Z" />
          <path d="M586 516l43-108 43 108h-22l33 84H570Z" />
          <path d="M718 541l27-69 27 69h-14l22 59h-72Z" />
          <path d="M808 519l43-108 43 108h-22l33 81H793Z" />
          <path d="M923 536l32-80 32 80h-16l24 64H907Z" />
        </g>
      </svg>

      {/* A faint horizon veil softens the transition between sky and landscape. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[22%] h-[18%] bg-gradient-to-t from-[#48638a]/20 to-transparent" />
    </div>
  )
}
