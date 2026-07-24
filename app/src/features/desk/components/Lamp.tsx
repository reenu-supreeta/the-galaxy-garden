/** Renders a curved-neck brass study lamp and its low, localized desk-surface glow. */
export function Lamp() {
  return (
    <div className="absolute -top-16 left-[7%] z-20 h-24 w-20" aria-label="Desk lamp">
      {/* Layered radial light pools softly across the desktop and future notebook area. */}
      <div className="pointer-events-none absolute top-14 -left-10 h-16 w-48 bg-[radial-gradient(ellipse_at_25%_25%,rgba(221,154,81,0.3)_0%,rgba(190,113,55,0.13)_38%,transparent_72%)]" />
      <div className="pointer-events-none absolute top-11 -left-2 h-12 w-32 bg-[radial-gradient(ellipse_at_20%_20%,rgba(238,175,95,0.22)_0%,transparent_68%)]" />

      {/* The circular wooden base anchors the lamp without making the desk feel heavy. */}
      <div className="absolute bottom-0 left-3 h-3 w-12 rounded-full bg-[#714731] shadow-[0_3px_5px_rgba(20,8,5,0.28)]" />

      {/* A slim matte-brass neck arcs upward from the base. */}
      <div className="absolute bottom-2 left-8 h-14 w-9 rounded-tl-[2rem] border-t-[3px] border-l-[3px] border-[#a77a4a]" />

      {/* The softly rounded dome directs the warm light downward. */}
      <div className="absolute top-0 left-12 h-7 w-14 rounded-t-full rounded-b-md bg-[#8e643b] shadow-[inset_0_1px_1px_rgba(232,186,120,0.24),0_3px_5px_rgba(18,8,5,0.22)]">
        <div className="absolute inset-x-1 bottom-1 h-1 rounded-full bg-[#d09a59]/65" />
      </div>
    </div>
  )
}
