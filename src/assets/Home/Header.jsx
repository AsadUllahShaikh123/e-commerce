import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "80" }}>
        <Container>

          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>

          <Navbar.Text className="search">
            <FormControl
              className="m-auto"
              style={{ width: 500 }}
              placeholder="Search a product"
            />
          </Navbar.Text>

          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="none">{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: "370px" }}>
              <span style={{ padding: "10px" }}>cart is Empty</span>
            </Dropdown.Menu>
            
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
