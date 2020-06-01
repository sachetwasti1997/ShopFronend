import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import {postData} from '../actions';
import { connect } from 'react-redux';

class AddProduct extends Component{

    state = {
        renderAgain: false
    }

        id = null;
        itemName= '';
        price= 0;
        quantityAvailable= 0;
        description= '';
        imageUrl= '';
        count = 0;

    componentDidMount(){
        
    }

    handleNameChange = (event) => {
            this.itemName = event.target.value
            if(this.count >= 1){
                this.setState({renderAgain: true});
            }
            console.log(this.itemName);
    }

    handlePriceChange = (event) => {
        this.price = event.target.value
        if(this.count >= 1){
            this.setState({renderAgain: true});
        }
        console.log(this.price);
    }

    handleQuantityChange = (event) => {
        this.quantityAvailable= event.target.value
        if(this.count >= 1){
            this.setState({renderAgain: true});
        }
        console.log(this.quantityAvailable);
    }

    handleDescriptionChange = (event) => {
            this.description = event.target.value
            if(this.count >= 1){
                this.setState({renderAgain: true});
            }
            console.log(this.description)
    }

    handleImageChange = (event) => {
            this.imageUrl= event.target.value
            if(this.count >= 1){
                this.setState({renderAgain: true});
            }
            console.log(this.imageUrl)
    }

    onSubmitClicked = async() => {
        const productJson = {
            id: this.id,
            itemName: this.itemName,
            price: this.price,
            quantity: this.quantityAvailable,
            description: this.description,
            imageUrl: this.imageUrl
        };
        this.props.send(productJson);
    }

    renderForm(disableButton){
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Name of the Item:</Form.Label>
                    <FormControl type="text" onMouseEnter={() => {this.count++}} onChange={this.handleNameChange} defaultValue={this.itemName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price:</Form.Label>
                    <FormControl type="number" onMouseEnter={() => {this.count++}} onChange={this.handlePriceChange} defaultValue={this.price}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity Available:</Form.Label>
                    <FormControl type="number" onMouseEnter={() => {this.count++}} onChange={this.handleQuantityChange} defaultValue={this.quantityAvailable}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL:</Form.Label>
                    <FormControl type="text" onMouseEnter={() => {this.count++}} onChange={this.handleImageChange} defaultValue={this.imageUrl}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Description:</Form.Label>
                    <FormControl as="textarea" onMouseEnter={() => {this.count++}} rows="4" onChange={this.handleDescriptionChange} defaultValue={this.description}/>
                </Form.Group>
                <Button href="/" onClick={this.onSubmitClicked} varient="primary" disabled={disableButton}>
                    Add Product
                </Button>
            </Form>
        );
    }

    checkState = () => {
        if(this.props.location.aboutProps){
            console.log(this.props.data[this.props.location.aboutProps.id]);
            this.id = this.props.location.aboutProps.id;
            this.itemName = this.props.data[this.props.location.aboutProps.id].title;
            this.imageUrl = this.props.data[this.props.location.aboutProps.id].imageUrl;
            this.description = this.props.data[this.props.location.aboutProps.id].description;
            this.price = this.props.data[this.props.location.aboutProps.id].price;
            this.quantityAvailable = this.props.data[this.props.location.aboutProps.id].quantity;
        }
    }

    render(){
        if(this.count == 0)this.checkState();
        let imageUrl = this.imageUrl.search("http");
        let disableButton = true;
        if(this.itemName !== '' && this.price > 0 && 
        this.quantityAvailable > 0 && imageUrl >= 0 && 
        this.description !== ''){
            disableButton = false;
        }
        console.log(disableButton);
        return(
            <div>
                {this.renderForm(disableButton)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {data: state.data}
}

export default connect(mapStateToProps, {
    send: postData
})(AddProduct);


