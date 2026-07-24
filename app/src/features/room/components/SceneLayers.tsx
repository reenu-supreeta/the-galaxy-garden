import { Bookshelf } from '../../bookshelf/components/Bookshelf'
import { Desk } from '../../desk/components/Desk'
import { RoomLighting } from '../../lighting/components/RoomLighting'
import { Baseboard } from './architecture/Baseboard'
import { WindowArchitecture } from './architecture/WindowArchitecture'
import { BedroomWindow } from './window/BedroomWindow'

/** Renders the wall, floor, and static lighting underneath the room content. */
export function BackgroundLayer() {
  return (
    <div className="absolute inset-0">
      {/* A restrained vertical gradient gives the warm wall a little depth. */}
      <div className="absolute inset-x-0 top-0 h-[82%] bg-gradient-to-b from-[#3a221c] via-[#301b17] to-[#251411]" />

      {/* The wooden floor takes up the bottom 18 percent of the room. */}
      <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-b from-[#4b2d20] to-[#301b14]" />

      <Baseboard />

      <RoomLighting />
    </div>
  )
}

/** Provides the isolated placement layer for the focal bedroom window. */
export function WindowLayer() {
  return (
    <div className="absolute inset-0">
      <WindowArchitecture />
      <BedroomWindow />
    </div>
  )
}

/** Groups all room furniture so future layout adjustments stay contained. */
export function FurnitureLayer() {
  return (
    <div className="absolute inset-0">
      <Desk />
      <Bookshelf />
    </div>
  )
}

/** Reserves fixed-position decoration slots without rendering decorative objects. */
export function DecorationLayer() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div data-slot="bookshelfDecor" className="absolute top-[10vh] left-0 h-[70vh] w-[clamp(9rem,16vw,17rem)]" />
      <div data-slot="windowSillDecor" className="absolute top-[44vh] left-1/2 h-12 w-[36vw] -translate-x-1/2" />
      <div data-slot="deskDecor" className="absolute top-[52vh] left-1/2 h-14 w-[45vw] -translate-x-1/2" />
    </div>
  )
}

/** Applies the existing vignette above the full scene without changing content placement. */
export function ForegroundLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(17,8,7,0.32)_100%)]" />
  )
}
