// App.tsx
import { useState } from "react";
import Background from "./layout/background"
import Header from "./layout/header"
import MainInfo from "./layout/MainInfo"

function App() {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  console.log("isSearch in app", isSearch)

  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      <Background />
      <Header
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <MainInfo
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
    </div>
  )
}

export default App
