import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export default function StyledLink({ children, small, ...props }: {
  children: ReactNode,
  small?: boolean
} & LinkProps) {
  return (
    <Link
      {...props}
      href={props.href}
      className={`
        relative
        inline-block

        hover:before:translate-y-2
        hover:before:translate-x-0
        
        before:transition
        before:content-['']
        before:absolute
        before:w-[90%]
        before:h-3.5
        before:-skew-x-[20deg]
        before:-translate-x-1
        before:-translate-y-2
        before:z-[-1]
        before:bottom-0
        before:bg-green-300

        ${small ? `
          before:h-1.5
          before:-translate-y-1
          hover:before:translate-y-1
        ` : ''}
      `}
    >{children}</Link>
  )
}