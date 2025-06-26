import type * as React from "react"

/**
 * Safely renders a Lucide icon (or any React component) only if it exists.
 * Prevents “Cannot read properties of null (reading 'type')” runtime errors.
 */
export function SafeIcon({
  icon: Icon,
  className,
}: {
  // we allow unknown because the icon might be undefined
  icon: React.ComponentType<{ className?: string }> | undefined | null
  className?: string
}) {
  if (!Icon) return null
  return <Icon className={className} />
}
