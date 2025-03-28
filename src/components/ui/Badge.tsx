import type React from "react"
import type { HTMLAttributes } from "react"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const Badge = ({ className = "", children, ...props }: BadgeProps) => {
  return (
    <div className={`inline-flex items-center rounded-sm px-2 py-1 text-xs font-semibold ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Badge }

