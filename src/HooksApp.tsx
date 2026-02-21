import { CounterApp } from "./components/CounterApp"
import { FetchApp } from "./components/FetchApp"
import { FormsApp } from "./components/FormsApp"

export const HooksApp = () => {
  return (
    <>
        <h1>Proyecto Hooks React</h1>
        <hr />
        <FetchApp />
        <hr />
        <FormsApp />
        <hr />
        <CounterApp />        
    </>
  )
}
