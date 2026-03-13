import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Input = forwardRef(({ className, type, label, error, ...props }, ref) => {
  const id = props.id || props.name
  
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-base font-semibold text-ink-900">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border-2 border-sage-200 bg-white px-4 text-base ring-offset-sand-50 placeholder:text-ink-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:border-sage-500",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          error && "border-accent-coral focus-visible:ring-accent-coral",
          className
        )}
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-sm font-medium text-accent-coral">
          {error}
        </span>
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input }
