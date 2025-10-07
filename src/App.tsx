// App.tsx
import Background from "./layout/background"
import Header from "./layout/header"
import MainInfo from "./layout/MainInfo"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      <Background />
      <Header />
      <MainInfo />
    </div>
  )
}

export default App
