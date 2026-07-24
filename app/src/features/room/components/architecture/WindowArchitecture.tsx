/** Adds wall recess depth, slim walnut trim, and a deeper sill behind the existing window. */
export function WindowArchitecture() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* The broad shadowed opening makes the window feel set 24 pixels into the wall. */}
      <div className="absolute top-[calc(7vh-1.5rem)] left-1/2 h-[calc(clamp(17rem,37vh,31rem)+3rem)] w-[calc(clamp(20rem,60vw,64rem)+3rem)] -translate-x-1/2 rounded-lg bg-[#24130f] shadow-[inset_0_0_24px_rgba(9,4,3,0.72),0_4px_10px_rgba(21,9,6,0.18)]" />

      {/* A six-pixel walnut trim stays deliberately thin around the established frame. */}
      <div className="absolute top-[calc(7vh-0.375rem)] left-1/2 h-[calc(clamp(17rem,37vh,31rem)+0.75rem)] w-[calc(clamp(20rem,60vw,64rem)+0.75rem)] -translate-x-1/2 rounded-md bg-[#68412e] shadow-[inset_0_0_0_1px_rgba(181,121,77,0.2),0_2px_5px_rgba(14,6,4,0.38)]" />

      {/* The deeper projection extends below the existing sill for future books and plants. */}
      <div className="absolute left-1/2 h-10 w-[calc(clamp(20rem,60vw,64rem)+3.75rem)] -translate-x-1/2 rounded-b-md bg-[#573323] shadow-[0_8px_11px_rgba(18,7,5,0.3)]" style={{ top: 'calc(7vh + clamp(17rem, 37vh, 31rem) - 0.35rem)' }} />
    </div>
  )
}
