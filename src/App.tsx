// App.tsx
import { useState } from "react";
import Background from "./layout/background"
import Header from "./layout/header"
import MainInfo from "./layout/MainInfo"
import { SearchContext } from "./context/SearchContext";
import { weatherData, type IWeatherData } from "./helper/getData";

function App() {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const weatherDataApp: IWeatherData = weatherData
  const lat = weatherDataApp.coord.lat
  const lon = weatherDataApp.coord.lon

  return (
    <SearchContext.Provider value={{ isSearch, setIsSearch }}>
      <div className="relative min-h-screen overflow-x-hidden ">
        {lat === 0 && lon === 0
          ?
          (
            <>
              <Background />
              <Header
                lat={lat}
                lon={lon}
              />
            </>
          )
          :
          (
            <>
              <Background />
              <Header
                lat={lat}
                lon={lon}
              />
              <MainInfo />
            </>
          )
        }
      </div>
    </SearchContext.Provider>
  )
}

export default App
