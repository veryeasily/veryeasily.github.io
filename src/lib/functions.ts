export const randomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

/**
 * Sample from a Weibull distribution, which we use to make it so that the
 * random UX tips are more likely to be shown when the page loads rather than
 * after a while.
 *
 * @param lambda - The `scale` parameter of the Weibull distribution.
 * @param k - The `shape` parameter of the Weibull distribution.
 *
 * @returns A random number from the Weibull distribution.
 */
export function sampleWeibull(lambda: number, k: number) {
  // Generate a random number between 0 and 1 (uniform distribution)
  const u = Math.random()

  // Use the inverse CDF formula to sample from the Weibull distribution
  const nextEventTime = lambda * Math.pow(-Math.log(1 - u), 1 / k)

  return nextEventTime
}
