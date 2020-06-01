import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarI extends Component{
    navbarAdd(){
        return (
            <div>
                <Navbar bg="dark" varient="dark">
                    <Nav className="mr-auto">
                        <Link to="/" style={{marginRight: '10px'}}>
                            <Nav.Item style={{color:'white'}}> <strong>SHOP</strong> </Nav.Item>
                        </Link>
                        <Link to="/cart" style={{marginRight: '10px'}}>
                            <Nav.Item style={{color:'white'}}>Cart</Nav.Item>
                        </Link>
                        <Link to="/add-product" style={{marginRight: '10px'}}>
                            <Nav.Item href="/add-product" style={{color:'white'}}>Add Product</Nav.Item>
                        </Link>
                        <Link to="/orders" style={{marginRight: '10px'}}>
                            <Nav.Item style={{color:'white'}}>Orders</Nav.Item>
                        </Link>
                        <Link to="/admin-product" style={{marginRight: '10px'}}>
                            <Nav.Item style={{color:'white'}}>Admin Product</Nav.Item>
                        </Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
    render(){
        return(
            this.navbarAdd()
        );
    }
}

export default NavbarI;

