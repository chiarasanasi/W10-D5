import HomeWeather from "./components/HomeWeather"
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"
import { useEffect, useState } from "react"

function App() {
  const [weatherCity, setWeatherCity] = useState("Roma")
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

  const fetchMeteoIniziale = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${weatherCity}&appid=8e007aef3349208ff2ad7f7458d29cf4`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel fetch iniziale")
        return res.json()
      })
      .then((data) => setWeatherData(data))
      .catch(() => setWeatherData(null))
  }

  useEffect(() => {
    fetchMeteoIniziale()
  }, [])

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
