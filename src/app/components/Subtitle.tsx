import { ReactNode } from "react";

export default function Subtitle({ children, className }: {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={`font-neue text-base font-medium uppercase tracking-wider ${className}`}>
      {children}
    </div>
  )
}