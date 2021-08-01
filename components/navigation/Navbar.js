import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const NavbarComponent = () => {
  const categories = [
    {
      title: "Entertainment",
      query: "entertainment",
    },
    {
      title: "Business",
      query: "business",
    },
    {
      title: "General",
      query: "general",
    },
    {
      title: "Health",
      query: "health",
    },
    {
      title: "Science",
      query: "science",
    },
    {
      title: "Sports",
      query: "sports",
    },
    {
      title: "Technology",
      query: "technology",
    },
  ];
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="#">Newly News</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
          {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          <NavDropdown title="Category" id="navbarScrollingDropdown">
            {/* business entertainment generalhealth science sports technology */}

            {categories.map((category) => {
              return (
                <NavDropdown.Item
                  href={`/?category=${category.query}`}
                  key={category.query}
                >
                  {category.title}
                </NavDropdown.Item>
              );
            })}

            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <Form className="d-flex">
          {/* <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          /> */}
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
