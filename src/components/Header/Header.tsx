import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="bg-light">
      <Container>
        <div className="col-4 offset-4 text-center">
          <Navbar.Brand>Soundside CMS</Navbar.Brand>
        </div>
        <Nav className="col-4">
          <div className="ms-auto">
            <Link className="nav-item mx-1" to="/">
              Home
            </Link>

            <Link className="nav-item mx-1" to="/forms">
              Forms
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
