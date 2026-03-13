import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Card = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-2 border-sage-100 bg-white text-ink-900 shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
Card.displayName = "Card"

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const Badge = forwardRef(({ className, variant = "neutral", ...props }, ref) => {
  const variants = {
    neutral: "bg-sage-100 text-sage-900",
    urgent: "bg-accent-coral/10 text-accent-coral border-accent-coral/20",
    success: "bg-sage-500/10 text-sage-900 border-sage-500/20",
    warning: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Card, CardHeader, CardTitle, CardContent, CardFooter, Badge }
