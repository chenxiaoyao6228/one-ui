import { createContext } from "react"

const context = createContext(null)

let { Provider } = context

export {
  context,
  Provider
};