import React, { useState } from "react";
import { Formik } from "formik";
import {
  Media,
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

interface Props {
  disSearch?: boolean;
}
const Header = (props: Props) => {
  const history = useHistory();
  
  const [search, setSearch] = useState("");
  const [textFilter, setTextFilter] = useState("Search");
  const clickSearch = (text : string) => {
    setSearch(text);
    history.push(`?${textFilter}=${text}`)
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Testing NAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Blog">Blog</Nav.Link>
        </Nav>

        <NavDropdown title={textFilter} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={() => setTextFilter("Search")}>Search</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setTextFilter("Filter")}>Filter</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setTextFilter("Tilte")}>Tilte</NavDropdown.Item>
        </NavDropdown>
        {props.disSearch && props.disSearch == true ? null : (
          <Formik
            initialValues={{
              textSearch: "",
            }}
            onSubmit={(values: any) => {
              clickSearch(values.textSearch);
            }}
          >
            {({ handleSubmit, handleChange }) => (
              <Form inline onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormik01">
                  <FormControl
                    type="text"
                    name="textSearch"
                    placeholder={`${textFilter}...`}
                    className="mr-sm-2"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                  {textFilter}
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
