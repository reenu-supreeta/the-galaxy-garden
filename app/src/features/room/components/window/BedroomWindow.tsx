import { NightBackdrop } from './NightBackdrop'
import { WindowFrame } from './WindowFrame'
import { WindowGlass } from './WindowGlass'
import { WindowSill } from './WindowSill'
import { SillSucculent } from './SillSucculent'

/** Composes the reusable focal window for the student bedroom. */
export function BedroomWindow() {
  return (
    <div className="absolute top-[7vh] left-1/2 h-[clamp(17rem,37vh,31rem)] w-[clamp(20rem,60vw,64rem)] -translate-x-1/2">
      <WindowFrame>
        <WindowGlass>
          <NightBackdrop />
        </WindowGlass>
      </WindowFrame>
      <WindowSill />
      <SillSucculent />
    </div>
  )
}
