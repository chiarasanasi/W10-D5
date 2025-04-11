import { useEffect, useState } from "react"
import { Button, Card, Container } from "react-bootstrap"

const HomeWeather = function (props) {
  const [fiveCity, setFiveCity] = useState("Milano")

  const [weatherData, setWeatherData] = useState(null)

  const weatherApiFirstPart = `https://api.openweathermap.org/data/2.5/weather?q=`
  const weatherApiSecondPart = `&appid=8e007aef3349208ff2ad7f7458d29cf4`

  useEffect(() => {
    if (fiveCity) {
      getSearchWeather()
      console.log(fiveCity)
    }
  }, [fiveCity])

  const getSearchWeather = () => {
    if (fiveCity) {
      fetch(weatherApiFirstPart + fiveCity + weatherApiSecondPart)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Errore nella fetch getSearchWeather")
          }
        })
        .then((data) => {
          console.log("METEO DI " + fiveCity, data)
          setWeatherData(data) // Store the fetched weather data
        })
        .catch((err) => {
          console.log("ERRORE", err)
        })
    }
  }

  const currentHour = function () {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    return `${hours}:${minutes}`
  }

  return (
    <>
      <Container className="mt-4 text-center d-flex flex-column">
        <div className="mb-4">
          <Button
            className="mx-3 rounded-5"
            style={{ width: "6rem" }}
            onClick={() => setFiveCity("milano")}
          >
            MILANO
          </Button>
          <Button
            className="mx-3 rounded-5"
            style={{ width: "6rem" }}
            onClick={() => setFiveCity("toronto")}
          >
            TORONTO
          </Button>
          <Button
            className="mx-3 rounded-5"
            style={{ width: "8rem" }}
            onClick={() => setFiveCity("NEW YORK")}
          >
            NEW YORK
          </Button>
          <Button
            className="mx-3 rounded-5"
            style={{ width: "6rem" }}
            onClick={() => setFiveCity("bari")}
          >
            BARI
          </Button>
          <Button
            className="mx-3 rounded-5"
            style={{ width: "12rem" }}
            onClick={() => setFiveCity("san pietro in bevagna")}
          >
            SAN PIETRO IN B.
          </Button>
        </div>
        {weatherData && (
          <>
            <Card
              style={{ width: "60%" }}
              className="d-flex align-items-center"
            >
              <h2 className="text-start mx-5 mt-4">{fiveCity}</h2>
              <h3 className="text-start mx-5 mt-4">Current Weather</h3>
              <p className="text-start mx-5 mt-1 fs-3 p-0">{currentHour()}</p>
              <div className="d-flex justify-content-center flex-row">
                <img
                  variant="top"
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  width="25%"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-1 ">
                    {(weatherData.main.temp - 273.15).toFixed(2)} C°
                  </Card.Title>
                  <p>{weatherData.weather[0].description}</p>
                  <p>
                    Feels Like{" "}
                    {(weatherData.main.feels_like - 273.15).toFixed(2)} C°
                  </p>
                </Card.Body>
              </div>
            </Card>
          </>
        )}
      </Container>
    </>
  )
}

export default HomeWeather
