import { sampleWeibull } from "@/lib/functions.ts"
import { useEffect } from "react"

type Timeout = ReturnType<typeof setTimeout>

/**
 * Custom hook that triggers a callback at random Weibull-distributed intervals
 *
 * @param fn - The function to be called at random intervals
 * @param lambda - The `scale` parameter of the Weibull distribution
 * @param k - The `shape` parameter of the Weibull distribution
 * @param deps - The dependencies that trigger a re-scheduling of the next event
 */
export const useWeibullInterval = (
  fn: () => void | (() => void),
  lambda = 2000,
  k = 0.5,
  deps: any[] = [],
) => {
  useEffect(() => {
    let timeoutId: Timeout | null = null
    let cleanup: (() => void) | null = null

    // Function to schedule the next event
    const scheduleNextEvent = () => {
      // Sample the next event time from Weibull distribution
      const nextEventTime = sampleWeibull(lambda, k) // Time in milliseconds

      // Schedule the callback to be executed after the sampled time
      timeoutId = setTimeout(() => {
        // Call the provided callback function
        cleanup = fn() || null

        // Schedule the next event
        scheduleNextEvent()
      }, nextEventTime)
    }

    // Start the first event scheduling
    scheduleNextEvent()

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId)
      }
      cleanup?.()
    }
  }, [fn, lambda, k, ...deps]) // Dependencies include callback, scale, and shape
}
