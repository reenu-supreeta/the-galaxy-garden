import type { PropsWithChildren } from 'react'

/** Provides the thin walnut surround and inset depth for a bedroom window. */
export function WindowFrame({ children }: PropsWithChildren) {
  return (
    <div className="h-full rounded-md bg-[#5a3828] p-2 shadow-[inset_0_0_0_1px_rgba(223,161,106,0.2),0_12px_24px_rgba(20,9,7,0.32)] sm:p-3">
      <div className="h-full overflow-hidden rounded-sm border border-[#2f1a13] shadow-[inset_0_2px_10px_rgba(14,7,12,0.7)]">
        {children}
      </div>
    </div>
  )
}
