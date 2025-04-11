import HomeWeather from "./components/HomeWeather"
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"
import { useEffect, useState } from "react"

function App() {
  const [weatherCity, setWeatherCity] = useState("")
  const [showError, setShowError] = useState(false)

  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    console.log(`DATI METEO DI ${weatherCity}`, weatherData)
  }, [weatherData])

  useEffect(() => {
    if (weatherData && Object.keys(weatherData).length === 0) {
      setShowError(false)
    } else if (weatherData === null) {
      setShowError(true)
    }
  }, [weatherData])

  useEffect(() => {}, [weatherCity])

  return (
    <>
      <NavBar
        weatherCity={weatherCity}
        showError={showError}
        setWeatherCity={setWeatherCity}
        setShowError={setShowError}
        setWeatherData={setWeatherData}
      />
      <HomeWeather />

      <Weather
        weather={weatherData}
        showError={showError}
        weatherCity={weatherCity}
      />
    </>
  )
}

export default App
