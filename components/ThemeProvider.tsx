"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always set dark theme
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}

