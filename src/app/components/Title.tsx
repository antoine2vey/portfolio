import type { ElementType, ReactNode } from "react";

export default function Title({
  children,
  className,
  as: Tag = "h1",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      className={`font-parnaso text-3xl sm:text-5xl leading-tight ${className}`}
    >
      {children}
    </Tag>
  );
}
