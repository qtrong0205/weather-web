// App.tsx
import Background from "./layout/background"
import Header from "./layout/header"
import MainInfo from "./layout/MainInfo"

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Background />
      <Header />
      <MainInfo />
    </div>
  )
}

export default App
