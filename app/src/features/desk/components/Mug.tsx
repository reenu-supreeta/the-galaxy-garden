/** Renders a simple cylindrical mug placeholder on the right side of the desk. */
export function Mug() {
  return (
    <div className="absolute top-1 right-[19%] h-7 w-6 rounded-b-md rounded-t-sm bg-[#a66f50] shadow-sm sm:top-2 sm:h-9 sm:w-7" aria-label="Mug">
      <div className="absolute top-2 -right-2 h-3 w-3 rounded-r-full border-2 border-[#a66f50]" />
    </div>
  )
}
