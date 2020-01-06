import React from 'react';
// import './nav-comp.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

export default class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home" className="mr-auto">Personal Page</Navbar.Brand>
                <Nav inline>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="https://www.github.com/wawo9193">Github</Nav.Link>
                    <Nav.Link href="https://fittrack.herokuapp.com">Fittrack Project</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
            </Navbar>
        )
    }
}