"use client";

import { ReactNode } from "react";

// Native smooth scrolling — avoids Lenis production hydration conflicts
export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
