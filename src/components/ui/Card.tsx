import type React from "react"

interface CardProps {
  className?: string
  children: React.ReactNode
}

const Card = ({ className = "", children }: CardProps) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
}

const CardHeader = ({ className = "", children }: CardProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

const CardTitle = ({ className = "", children }: CardProps) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
}

const CardDescription = ({ className = "", children }: CardProps) => {
  return <p className={`text-sm text-gray-500 mt-1 ${className}`}>{children}</p>
}

const CardContent = ({ className = "", children }: CardProps) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

const CardFooter = ({ className = "", children }: CardProps) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

