/**
 * Performance utilities for optimizing user interactions and animations
 */

/**
 * Throttle function - Limits execution to once per specified interval
 * Useful for high-frequency events like scroll, mousemove, resize
 * @param func - Function to throttle
 * @param limit - Minimum time between executions in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  let lastResult: ReturnType<T>

  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      inThrottle = true
      lastResult = func.apply(this, args)
      setTimeout(() => (inThrottle = false), limit)
    }
    return lastResult
  }
}

/**
 * Debounce function - Delays execution until after a period of inactivity
 * Useful for search inputs, form validation, window resize
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args)
      timeoutId = null
    }, delay)
  }
}

/**
 * RequestAnimationFrame-based throttle for smooth 60fps animations
 * Ensures updates happen at most once per frame
 * @param func - Function to throttle with RAF
 * @returns RAF-throttled function
 */
export function throttleRAF<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null
  let lastArgs: Parameters<T> | null = null

  return function (this: any, ...args: Parameters<T>) {
    lastArgs = args

    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        if (lastArgs) {
          func.apply(this, lastArgs)
          lastArgs = null
        }
        rafId = null
      })
    }
  }
}
