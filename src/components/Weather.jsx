import { useEffect, useState } from "react"
import AlertError from "./AlertError"
import { Card, Button, Col, Container, Row } from "react-bootstrap"

const Weather = function (props) {
  const [photo, setPhoto] = useState(null)

  if (props.weather && props.weather.list) {
    return (
      <>
        <Container className="text-center">
          <h1 className="mt-4">Meteo di {props.weather.city.name}</h1>
          <Row className=" justify-content-center d-flex flex-wrap w-100 bg-white py-5 rounded-4 gap-3">
            {props.weather.list.slice(0, 5).map((weather, index) => {
              return (
                <Col xs={5} sm={3} md={3} lg={2} className="p-0" key={index}>
                  <Card className="d-flex align-items-center rounded-4 border-0 bg-card">
                    <Card.Title className="text-uppercase pt-3">
                      {weather.weather[0].description}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      className="w-75"
                    />
                    <Card.Body>
                      <Card.Title>
                        {(weather.main.temp - 273.15).toFixed(2)} C°
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  } else {
    console.log("bestemmione")
    return <AlertError weather={props.weather} />
  }
}

export default Weather
