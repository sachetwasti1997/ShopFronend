import React, { Component } from 'react';
import NavbarI from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AddProduct from './AddProduct';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';
import Cart from './Cart';
import AdminProduct from './AdminProducts';
import Orders from './Orders';

class App extends Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <NavbarI/>
                    <Container>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/products" component={ProductList} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/add-product" component={AddProduct}/>
                        <Route path="/admin-product" component={AdminProduct} />
                        <Route path="/orders" component={Orders}/>
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
