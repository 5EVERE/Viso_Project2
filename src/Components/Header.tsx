import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import "./Header.css";

const Header = function () {
  const { isAuth, email } = useAuth();
  return (
    <header>
      <Navbar bg="light" expand="lg" variant="light" className="shadow-sm">
        <Container>
          <Row className="w-100">
            <Col xs={12} md={4} className="d-flex align-items-center">
              <Navbar.Brand>Viso</Navbar.Brand>
            </Col>
            <Col xs={12} md={8} className="d-flex justify-content-end">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link as="span">
                    <NavLink to="/login" activeClassName="active">
                      Login/Reg
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as="span">
                    <NavLink to="/profile" activeClassName="active">
                      Profile
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as="span">
                    {isAuth && (
                      <NavLink to="/items-list" activeClassName="active">
                        Items
                      </NavLink>
                    )}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
