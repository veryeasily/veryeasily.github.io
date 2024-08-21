/**
 * Sample from a Weibull distribution, which we use to make it so that the
 * random UX tips are more likely to be shown when the page loads rather than
 * after a while.
 *
 * @param scale - The `lambda` parameter of the Weibull distribution.
 * @param shape - The `k` parameter of the Weibull distribution.
 *
 * @returns A random number from the Weibull distribution.
 */
export const sampleRandomWeibull = (scale: number, shape: number) => {
  // Generate a random number between 0 and 1 (uniform distribution)
  const u = Math.random()

  // Use the inverse CDF formula to sample from the Weibull distribution
  const nextEventTime = scale * Math.pow(-Math.log(1 - u), 1 / shape)

  return nextEventTime
}

export const randomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]
