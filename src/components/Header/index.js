import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Shirts</Nav.Link>
            <Nav.Link href="#action2">Joggers</Nav.Link>
            <Nav.Link href="#action2">Innerwear</Nav.Link>
            <Nav.Link href="#action2">Sneakers</Nav.Link>
            <Nav.Link href="#action2">Shorts</Nav.Link>
            <Nav.Link href="#action2">Polo</Nav.Link>

            {/*             
            <Nav.Link href="#">
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">
              <FaSearch style={{ fontSize: "15px" }} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
