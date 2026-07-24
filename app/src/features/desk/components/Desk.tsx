import { Lamp } from './Lamp'

/** Renders a floating, Scandinavian-inspired walnut desk without accessories. */
export function Desk() {
  return (
    <section
      aria-label="Study desk"
      className="absolute top-[52vh] left-1/2 z-10 h-[clamp(9rem,17vh,13rem)] w-[clamp(18rem,45vw,48rem)] -translate-x-1/2"
    >
      {/* A slender, curved front edge and inset highlight create a restrained bevel. */}
      <div className="absolute inset-x-0 top-0 h-7 rounded-[0.35rem] rounded-b-xl bg-[#6d432f] shadow-[0_11px_16px_rgba(17,7,5,0.25)] sm:h-9">
        <div className="absolute inset-x-1 top-1 h-2 rounded-t-[0.2rem] bg-[#8a5a3f]/55" />
        <div className="absolute inset-x-0 bottom-0 h-2 rounded-b-xl bg-[#4b2c21]/45" />
      </div>

      {/* Tapered, gently splayed legs keep the desk visually light and elevated. */}
      <div
        className="absolute top-6 bottom-0 left-[10%] w-4 origin-top -rotate-[4deg] bg-[#4b2c21] shadow-[2px_5px_6px_rgba(17,7,5,0.2)] sm:top-8 sm:w-5"
        style={{ clipPath: 'polygon(27% 0, 73% 0, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute top-6 right-[10%] bottom-0 w-4 origin-top rotate-[4deg] bg-[#4b2c21] shadow-[-2px_5px_6px_rgba(17,7,5,0.2)] sm:top-8 sm:w-5"
        style={{ clipPath: 'polygon(27% 0, 73% 0, 100% 100%, 0 100%)' }}
      />

      <Lamp />
    </section>
  )
}
