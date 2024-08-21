import type { DependencyList } from "react"
import { useEffect } from "react"

import { sampleRandomWeibull } from "@/lib/functions.ts"

type Timeout = ReturnType<typeof setTimeout>

/**
 * Custom hook that triggers a callback at random Weibull-distributed intervals
 *
 * @param handler - The function to be called at random intervals
 * @param scale - The `lambda` parameter of the Weibull distribution
 * @param shape - The `k` parameter of the Weibull distribution
 * @param deps - The dependencies that trigger a re-scheduling of the next event
 * @param offset - An offset to add to the sampled random delay
 */
export const useWeibullInterval = (
  handler: () => (() => void) | void = () => {},
  scale = 2000,
  shape = 0.5,
  deps: DependencyList = [],
  offset = 0,
) => {
  useEffect(() => {
    let timeoutId: Timeout | null = null
    let cleanup: (() => void) | null = null

    const prepareNext = () => {
      // Sample the next event time from Weibull distribution
      const randomDelay = sampleRandomWeibull(scale, shape) + offset

      timeoutId = setTimeout(() => {
        cleanup = handler() || null
        prepareNext()
      }, randomDelay)
    }

    // Start the first event
    prepareNext()

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId)
      }
      console.log("clearing interval", cleanup)
      cleanup?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler, scale, shape, ...deps])
}
