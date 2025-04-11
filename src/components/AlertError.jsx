import { Alert, Container } from "react-bootstrap"
import { useState } from "react"

const AlertError = function (props) {
  // const [show, setShow] = useState(true)

  // if (props.weather.length === 0 && show) {
  return (
    <>
      <Container className="mt-5">
        <Alert
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
          className="rounded-4"
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </Container>
    </>
  )
  // } else {
  //   return <></>
  // }
}

export default AlertError
