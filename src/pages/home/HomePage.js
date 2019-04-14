import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  Nav,
  Tab,
  FormControl,
  Tabs,
  Button
} from "react-bootstrap";
import { AcademyList } from "./../../components/academy";

const academies = [
  {
    id: 1,
    title: "Agile Theory1"
  },
  {
    id: 2,
    title: "Agile Theory2"
  },
  {
    id: 3,
    title: "Agile Theory3"
  }
];
class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">思沃学院</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Form inline>
              <Button variant="outline-success">注销</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ margin: 50 }}>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="特训营列表">
              <div>
                <AcademyList academies={academies} />
              </div>
            </Tab>
          </Tabs>
        </div>
        ;
      </>
    );
  }
}

export default HomePage;
