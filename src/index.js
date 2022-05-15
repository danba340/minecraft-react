import { useState } from "react"
import ReactDOM from "react-dom"
import { Footer } from "@pmndrs/branding"
import "./styles.css"
import App from "./App"

function Overlay() {
  const [ready, set] = useState(false)
  return (
    <>
      <App />
      <div className="dot" />
      <div className={`fullscreen bg ${ready ? "ready" : "notready"} ${ready && "clicked"}`}>
        <div className="stack">
          <button onClick={() => set(true)}>Click (needs fullscreen)</button>
        </div>
        <Footer date="16. June" year="2021" />
      </div>
    </>
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))
