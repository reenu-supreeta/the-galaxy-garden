/** Renders a small far-right potted-plant placeholder from basic shapes. */
export function Plant() {
  return (
    <div className="absolute -top-4 right-[7%] h-14 w-10" aria-label="Potted plant">
      <div className="absolute top-0 left-1/2 h-7 w-5 -translate-x-1/2 rounded-[50%] bg-[#3f6347]" />
      <div className="absolute top-4 left-1 h-6 w-4 -rotate-[35deg] rounded-[50%] bg-[#34533d]" />
      <div className="absolute top-4 right-1 h-6 w-4 rotate-[35deg] rounded-[50%] bg-[#486d4b]" />
      <div className="absolute bottom-0 left-1 h-6 w-8 rounded-b-md rounded-t-sm bg-[#89553a]" />
    </div>
  )
}
