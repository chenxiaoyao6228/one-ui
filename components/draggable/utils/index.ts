export const noop = () => { }

export function canDragY(axis: string) {
  return axis === 'both' || axis === 'y'
}

export function canDragX(axis: string) {
  return axis === 'both' || axis === 'x'
}

export function int(floatNum: number) {
  return Math.floor(floatNum)
}

export function isFunction(fn: any): fn is Function {
  return fn instanceof Function
}

export function matchSelector(el: any, selector: string): boolean {
  if (isFunction(el.matches)) {
    return el.matches(selector)
  } else if (isFunction(el.webkitMatchesSelector)) {
    return el.webkitMatchesSelector(selector)
  } else if (isFunction(el.mozMatchesSelector)) {
    return el.mozMatchesSelector(selector)
  } else if (isFunction(el.msMatchesSelector)) {
    return el.msMatchesSelector(selector)
  } else {
    return el.oMatchesSelector(selector)
  }
}
