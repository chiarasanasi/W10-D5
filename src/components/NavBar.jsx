import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

import AlertError from "./AlertError"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Form, Button, Row, Col } from "react-bootstrap"

import { useState } from "react"

const NavBar = function (props) {
  const [mode, setMode] = useState({
    onOff: true,
    bg: "dark",
    dataBsTheme: "dark",
    textColor: "light",
    searchColor: "primary",
  })

  const toggleTheme = () => {
    setMode((prevMode) => ({
      onOff: !prevMode.onOff,
      bg: prevMode.onOff ? "light" : "dark",
      dataBsTheme: prevMode.onOff ? "light" : "dark",
      textColor: prevMode.onOff ? "dark" : "light",
      searchColor: prevMode.onOff ? "primary" : "light",
    }))
  }

  const weatherApiFirstPart = `https://api.openweathermap.org/data/2.5/forecast?q=`

  const weatherApiSecondPart = `&appid=8e007aef3349208ff2ad7f7458d29cf4`

  const getSearchWeather = () => {
    fetch(weatherApiFirstPart + props.weatherCity + weatherApiSecondPart)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella fetch getSearchWeather")
        }
      })
      .then((data) => {
        // console.log(`DATI METEO DI ${props.weatherCity}`, data)
        props.setWeatherData(data)
      })
      .catch((err) => {
        console.log("ERRORE", err)
        props.setWeatherData(null)
      })
  }

  return (
    <div data-bs-theme={mode.dataBsTheme}>
      <Navbar bg={mode.bg} data-bs-theme={mode.bg}>
        <Container>
          <Navbar.Brand href="#home">METEO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <Form className="align-content-center">
              <div className={`text-${mode.textColor}`}>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Dark / Light"
                  onChange={toggleTheme}
                  checked={!mode.onOff}
                />
              </div>
            </Form>
          </Nav>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={props.weatherCity}
                  className=" mr-sm-2"
                  onChange={(e) => {
                    props.setWeatherCity(e.target.value)
                  }}
                />
              </Col>
              <Col xs="auto">
                <Button
                  variant={mode.searchColor}
                  className="rounded-5"
                  onClick={() => {
                    if (props.weatherCity.trim() !== "") {
                      getSearchWeather()
                    } else {
                      props.setShowError(true)
                    }
                  }}
                >
                  <i className="bi bi-search"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
