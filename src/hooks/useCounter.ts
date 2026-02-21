import { useState } from "react"

export const useCounter = (initialValue = 0) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (inc = 1) => {
    setCounter(counter => counter + inc)
  }

  const decrement = (dec = 1, allowNegative = false) => {
    if(!allowNegative && counter - dec < 0) return
    setCounter(counter => counter - dec)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
