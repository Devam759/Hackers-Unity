import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
