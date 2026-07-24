/** Adds static gradient-and-shadow lighting to the existing bedroom composition. */
export function RoomLighting() {
  return (
    <>
      {/* Moonlight spreads outward from the window and softly cools the wall. */}
      <div className="pointer-events-none absolute top-[13vh] left-1/2 z-0 h-[52vh] w-[70vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(103,139,185,0.15)_0%,rgba(67,94,140,0.07)_37%,transparent_72%)] blur-2xl" />

      {/* The lamp's warm source reaches up to the sill and out over the desk surface. */}
      <div className="pointer-events-none absolute top-[38vh] left-[37%] z-0 h-[36vh] w-[42vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_45%_62%,rgba(205,137,70,0.17)_0%,rgba(161,91,45,0.08)_43%,transparent_76%)] blur-2xl" />

      {/* The desk's low, diffuse grounding shadow reinforces its floating profile. */}
      <div className="pointer-events-none absolute top-[67vh] left-1/2 z-0 h-7 w-[42vw] -translate-x-1/2 rounded-[50%] bg-[#160b09]/45 blur-xl" />

      {/* A cool, low-opacity reflection carries moonlight across the wood floor. */}
      <div className="pointer-events-none absolute inset-x-[14%] bottom-0 z-0 h-[18%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(100,140,190,0.17)_0%,rgba(83,119,163,0.06)_40%,transparent_72%)] blur-md" />

      {/* This localized falloff keeps the left bookshelf quieter than the room centre. */}
      <div className="pointer-events-none absolute top-[10vh] left-0 z-20 h-[70vh] w-[clamp(9rem,16vw,17rem)] bg-gradient-to-r from-[#120907]/25 to-transparent" />
    </>
  )
}
