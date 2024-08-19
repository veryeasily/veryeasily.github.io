import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const classes = (...classNames: Parameters<typeof clsx>) => {
  return twMerge(clsx(...classNames))
}
