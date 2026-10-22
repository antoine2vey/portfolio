import type { ElementType, ReactNode } from "react";

export default function Subtitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      className={`font-neue text-base font-medium uppercase tracking-wider ${className}`}
    >
      {children}
    </Tag>
  );
}
