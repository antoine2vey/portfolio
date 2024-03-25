import { ReactNode } from "react";

export default function Title({ children, className }: {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={`font-parnaso text-5xl leading-tight ${className}`}>
      {children}
    </div>
  )
}