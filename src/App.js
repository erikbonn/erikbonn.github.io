import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#dad",
      }}
    >
      <div
        style={{
          color: "#ffa",
          textShadow: "1px 1px 2px black",
          fontSize: "75px",
        }}
      >
        Erik Bonn
      </div>
      <div>Welcome</div>
    </div>
  )
}

export default App
