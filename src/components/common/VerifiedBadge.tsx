
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  className?: string;
  size?: "sm" | "md";
}

export function VerifiedBadge({ className, size = "md" }: VerifiedBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 text-gaming-cyan font-medium",
      size === "sm" ? "text-xs" : "text-sm",
      className
    )}>
      <CheckCircle className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
      <span>Verified</span>
    </span>
  );
}
