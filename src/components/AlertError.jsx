import { Alert, Container } from "react-bootstrap"

const AlertError = function (props) {
  return (
    <Container className="mt-5">
      <Alert
        variant="danger"
        onClose={() => props.setShowError(false)}
        dismissible
        className="rounded-4"
      >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>La città non è valida, riprova con un'altra.</p>
      </Alert>
    </Container>
  )
}

export default AlertError
