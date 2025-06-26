"use client"

import type * as React from "react"

/**
 * Safely renders an icon component (or any React component) only if it exists.
 * Prevents “Cannot read properties of null (reading 'type')” runtime errors.
 */
export function SafeIcon({
  icon: Icon,
  className,
}: {
  icon: React.ComponentType<{ className?: string }> | undefined | null
  className?: string
}) {
  if (!Icon) return null
  return <Icon className={className} />
}
