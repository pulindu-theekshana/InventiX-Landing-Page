"use client";

import type { ReactNode } from "react";

/**
 * Route transition.
 *
 * A template re-mounts on every navigation (a layout does not), so the
 * animation replays each time you move between pages. Kept to a short
 * lift-and-fade — long enough to say "this is a different page", short
 * enough that it never sits between someone and what they clicked.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-in">{children}</div>;
}
