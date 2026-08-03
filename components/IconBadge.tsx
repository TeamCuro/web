import type { ReactNode } from "react";

interface IconBadgeProps {
  icon: ReactNode;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function IconBadge({ icon, label, tone = "light", className = "" }: IconBadgeProps) {
  const textClass = tone === "dark" ? "text-primary-100" : "text-secondary-500";
  return (
    <span className={`inline-flex items-center gap-1.5 text-body-sm font-medium ${textClass} ${className}`}>
      {icon}
      {label}
    </span>
  );
}
