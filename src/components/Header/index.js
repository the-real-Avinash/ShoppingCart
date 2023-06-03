import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";

const navBar = [
  { name: "All", value: {} },
  { name: "Shirts", value: { category: "shirts" } },
  { name: "Joggers", value: { category: "joggers" } },
  { name: "Innerwear", value: { category: "innerwear" } },
  { name: "Sneakers", value: { category: "sneakers" } },
  { name: "Shorts", value: { category: "shorts" } },
  { name: "Polo", value: { category: "polo" } },
];

const Header = ({ fetchData }) => {
  const [activeMenu, setActiveMenu] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" label="hi" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            {navBar.map((menu, index) => (
              <Nav.Link
                onClick={() => {
                  fetchData(menu.value);
                  setActiveMenu(menu.name);
                }}
                style={{
                  borderBottom:
                    activeMenu == menu.name ? "1px solid black" : null,
                }}
              >
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Button variant="outline-warning">
              <FaSearch
                style={{ fontSize: "15px" }}
                onClick={() => {
                  fetchData({ name: searchInput });
                }}
              />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
