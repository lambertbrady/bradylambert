import { wrapUtility } from './wrap-utility'
import * as P from 'polished'
import convertCSSLength from 'convert-css-length'

const convert = convertCSSLength('16px')
const convertToPx = length => convert(length, 'px')

export const between = wrapUtility(
  P.between,
  ['space', 'space', 'sizes', 'sizes'],
  [
    undefined,
    undefined,
    theme => theme.breakpoints.start,
    theme => theme.breakpoints.end
  ],
  convertToPx
)

export const constrain = wrapUtility(
  (fromSize, toSize, minScreen, maxScreen) => {
    const betweenVal = P.between(fromSize, toSize, minScreen, maxScreen)
    return `clamp(${fromSize}, ${betweenVal}, ${toSize})`
  },
  ['space', 'space', 'sizes', 'sizes'],
  [
    undefined,
    undefined,
    theme => theme.breakpoints.start,
    theme => theme.breakpoints.end
  ],
  convertToPx
)

// (themeVal, theme, fnArgIndex, fnArgs) => {
//   return fnArgIndex === 0 ? convertToPx(themeVal) : themeVal
// }

// const between = (...args) => {
//   const [xi, xf, vi, vf] = args.map(arg => parseFloat(arg))
//   const slope = (xf - xi) / (vf - vi)
//   const base = xi - slope * vi
//   return `clamp(${xi}px, ${slope} * 100vw + ${base}px, ${xf}px)`
// }
