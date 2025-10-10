// App.tsx
import { useState } from "react";
import Background from "./layout/background"
import Header from "./layout/header"
import MainInfo from "./layout/MainInfo"
import { SearchContext } from "./context/SearchContext";

function App() {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ isSearch, setIsSearch }}>
      <div className="relative min-h-screen overflow-x-hidden ">
        <Background />
        <Header />
        <MainInfo

        />
      </div>
    </SearchContext.Provider>
  )
}

export default App
