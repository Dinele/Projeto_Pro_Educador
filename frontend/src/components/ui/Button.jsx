import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Button = forwardRef(({ className, variant = "primary", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 disabled:opacity-50 disabled:pointer-events-none ring-offset-sand-50 active:scale-[0.98] transition-all"
  
  const variants = {
    primary: "bg-sage-700 text-white hover:bg-sage-900 shadow-sm",
    secondary: "bg-sage-100 text-sage-900 hover:bg-sage-200",
    outline: "border-2 border-sage-700 text-sage-700 hover:bg-sage-100",
    ghost: "hover:bg-sage-100 text-ink-700 hover:text-ink-900",
    danger: "bg-accent-coral text-white hover:bg-red-600 shadow-sm",
  }

  const sizes = {
    default: "h-11 px-5 py-2 text-base",
    sm: "h-9 px-4 text-sm",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  }

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
