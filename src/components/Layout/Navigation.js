import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl, Button} from 'react-bootstrap'

export class Navigation extends Component {

    render() {
        return (
            <Navbar className="navbar-custom clearfix">
                <Navbar.Brand href="#home"><HomeIcon>star</HomeIcon>Assets Manager</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Assets</Nav.Link>                    
                    <Nav.Link href="/Ex">MDB Table</Nav.Link>  
                    <Nav.Link href="./employees">Employees</Nav.Link>
                    <Nav.Link href="#pricing">Calendar</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        );
    }
}
