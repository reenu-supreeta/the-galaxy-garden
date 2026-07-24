/** Renders a flush, airy walnut bookshelf with simple books and plant placeholders. */
export function Bookshelf() {
  return (
    <aside
      aria-label="Bookshelf"
      className="absolute top-[10vh] left-0 z-10 h-[70vh] w-[clamp(9rem,16vw,17rem)] rounded-r-sm bg-[#4a2d21] px-2 pt-2 shadow-[5px_10px_18px_rgba(18,8,6,0.25)] sm:px-3"
    >
      {/* Six spacious compartments keep the shelf useful without making it cluttered. */}
      <div className="grid h-full grid-rows-6">
        <Shelf>
          <div className="absolute bottom-2 left-2 flex items-end gap-1">
            <Book className="h-8 w-2 bg-[#8e5d47]" />
            <Book className="h-10 w-2.5 bg-[#5a6f6c]" />
            <Book className="h-7 w-2 bg-[#a57751]" />
          </div>
          <HangingPothos />
        </Shelf>
        <Shelf>
          <div className="absolute bottom-2 left-2 flex items-end gap-1">
            <Book className="h-9 w-2 bg-[#8c6749]" />
            <Book className="h-6 w-2.5 bg-[#60706a]" />
          </div>
          <SmallPlant />
        </Shelf>
        <Shelf>
          <div className="absolute bottom-2 left-2 flex items-end gap-1">
            <Book className="h-7 w-2.5 bg-[#765343]" />
            <Book className="h-10 w-2 bg-[#9c714d]" />
            <Book className="h-8 w-2 bg-[#465d5a]" />
          </div>
        </Shelf>
        <Shelf>
          <div className="absolute bottom-2 left-2 flex items-end gap-1">
            <Book className="h-6 w-2 bg-[#8b6048]" />
            <Book className="h-9 w-2.5 bg-[#566a62]" />
          </div>
          <TrailingVine />
        </Shelf>
        <Shelf>
          <div className="absolute bottom-2 left-2 flex items-end gap-1">
            <Book className="h-10 w-2 bg-[#765546]" />
            <Book className="h-7 w-2 bg-[#9d754f]" />
            <Book className="h-8 w-2.5 bg-[#50655c]" />
          </div>
        </Shelf>
        <Shelf>
          <div className="absolute bottom-2 left-2 flex items-end gap-1">
            <Book className="h-7 w-2 bg-[#8b6248]" />
            <Book className="h-9 w-2.5 bg-[#607069]" />
          </div>
        </Shelf>
      </div>
    </aside>
  )
}

/** Provides one open shelf compartment with a slim walnut shelf board. */
function Shelf({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-b-4 border-[#67402d]">
      {children}
    </div>
  )
}

/** Renders one intentionally plain rectangular book. */
function Book({ className }: { className: string }) {
  return <div className={`rounded-t-sm ${className}`} />
}

/** Renders the small hanging pothos and its restrained trailing leaves. */
function HangingPothos() {
  return (
    <div className="absolute -top-1 right-2 h-16 w-8">
      <div className="absolute top-0 left-1/2 h-4 w-px bg-[#6c5140]" />
      <div className="absolute top-3 left-1 h-4 w-6 rounded-b-md bg-[#80523a]" />
      <div className="absolute top-6 left-1/2 h-9 w-px bg-[#426246]" />
      <div className="absolute top-9 left-[9px] h-3 w-2.5 -rotate-[35deg] rounded-[50%] bg-[#4a704d]" />
      <div className="absolute top-12 left-[15px] h-3 w-2.5 rotate-[35deg] rounded-[50%] bg-[#3e6345]" />
    </div>
  )
}

/** Renders a small potted plant with understated leaf shapes for the second shelf. */
function SmallPlant() {
  return (
    <div className="absolute right-3 bottom-2 h-10 w-8">
      <div className="absolute top-0 left-1 h-5 w-3 rotate-[28deg] rounded-[50%] bg-[#4b6f50]" />
      <div className="absolute top-0 right-1 h-5 w-3 -rotate-[28deg] rounded-[50%] bg-[#3d6045]" />
      <div className="absolute bottom-0 left-1 h-5 w-6 rounded-b-md rounded-t-sm bg-[#87533a]" />
    </div>
  )
}

/** Renders one vine that falls slightly beyond the bookshelf's right edge. */
function TrailingVine() {
  return (
    <div className="absolute top-3 -right-3 h-16 w-6">
      <div className="absolute left-1/2 h-full w-px bg-[#3b5d43]" />
      <div className="absolute top-3 left-0 h-3 w-2.5 -rotate-[35deg] rounded-[50%] bg-[#4c714e]" />
      <div className="absolute top-7 right-0 h-3 w-2.5 rotate-[35deg] rounded-[50%] bg-[#426744]" />
      <div className="absolute top-12 left-0 h-3 w-2.5 -rotate-[35deg] rounded-[50%] bg-[#4a6d4a]" />
    </div>
  )
}
