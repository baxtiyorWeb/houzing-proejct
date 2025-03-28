import type React from "react"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children: React.ReactNode
}

const Buttons = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variantStyles = {
      default: "bg-[#0061DF] text-white hover:bg-blue-700",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
      ghost: "bg-transparent hover:bg-gray-100",
      link: "bg-transparent underline-offset-4 hover:underline text-blue-600 hover:bg-transparent",
    }

    const sizeStyles = {
      default: "h-10 px-4 py-2 rounded-md",
      sm: "h-8 px-3 text-sm rounded-md",
      lg: "h-12 px-6 rounded-md",
      icon: "h-10 w-10 rounded-md p-0",
    }

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Buttons.displayName = "Button"

export { Buttons }

