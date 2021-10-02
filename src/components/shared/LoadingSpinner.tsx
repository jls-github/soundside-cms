import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container"

export default function LoadingSpinner(): JSX.Element {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}
