"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RuPilotTableScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.scrollLeft = 0;
    node.scrollTop = 0;
  }, []);

  return (
    <div ref={ref} className="ru-pilot-table-wrap" dir="ltr">
      {children}
    </div>
  );
}
