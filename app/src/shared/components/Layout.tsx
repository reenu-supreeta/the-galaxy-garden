import type { PropsWithChildren } from "react";

/** Provides the reusable full-screen canvas for application scenes. */
export function Layout({ children }: PropsWithChildren) {
  return <main className="relative min-h-screen overflow-hidden">{children}</main>
}
