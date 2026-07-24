import {
  BackgroundLayer,
  DecorationLayer,
  ForegroundLayer,
  FurnitureLayer,
  WindowLayer,
} from './SceneLayers'

/** Composes the bedroom from stable absolute scene layers. */
export function Room() {
  return (
    <section
      aria-label="Bedroom background"
      className="relative z-10 min-h-screen overflow-hidden bg-[#2a1714]"
    >
      <BackgroundLayer />
      <WindowLayer />
      <FurnitureLayer />
      <DecorationLayer />
      <ForegroundLayer />
    </section>
  )
}
