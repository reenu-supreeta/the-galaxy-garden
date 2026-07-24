import type { PropsWithChildren } from 'react'

/** Divides the outside view into four glass panes with a muted moonlit reflection. */
export function WindowGlass({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full overflow-hidden bg-[#0b1530]">
      {children}

      {/* The grid dividers turn the continuous night view into four panes. */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2" aria-hidden="true">
        <div className="border-r-2 border-b-2 border-[#4a2d21]" />
        <div className="border-b-2 border-[#4a2d21]" />
        <div className="border-r-2 border-[#4a2d21]" />
        <div />
      </div>

      {/* Low-contrast gradients suggest moonlight across the glass. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_20%,rgba(173,190,218,0.13)_42%,transparent_56%),linear-gradient(110deg,transparent_62%,rgba(181,195,220,0.09)_76%,transparent_88%)]"
        aria-hidden="true"
      />
    </div>
  )
}
