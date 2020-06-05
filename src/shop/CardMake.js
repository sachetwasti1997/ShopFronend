import React, { Component } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
// import Modal from 'react-modal';

import { postCartData, deleteAdminData } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CardMk extends Component {

    state = {
        modelOpen: false
    }

    handleHover = () => {
        this.setState({
            modelOpen: true
        })
    }

    handleLeave = () => {
        this.setState({
            modelOpen: false
        })
    }

    addToCartClick = (event) => {
        // event.preventDefault();
        const cartDataSend = {
            id:this.props.item.itemsArray.id, 
            price: +this.props.item.itemsArray.price
        }
        // console.log(this.props);
        console.log(cartDataSend);
        console.log("Data to add to cart")
        this.props.cartData(cartDataSend);
        return;
    }

    onDeleteClick = () => {
        console.log(this.props.item.itemsArray.id, "To be deleted");
        this.props.delete({id:this.props.item.itemsArray.id});
    }

    render(){
        console.log(this.props.item.message[0], this.props.item.message.length)
        console.log(this.props.item.itemsArray.id);
        let description='';
        let itemName = '';
        let buttonComponent;
        if(this.props.item.itemsArray.description.length > 18){
            for(let i=0; i< 19; i++){
                description += this.props.item.itemsArray.description[i];
            }

        description += "...";
        }else{
            description = this.props.item.itemsArray.description;
        }
        if(this.props.item.itemsArray.title.length > 18){
            for(let i=0; i< 19; i++){
                itemName += this.props.item.itemsArray.title[i];
            }
            itemName += "...";
        }else{
            itemName = this.props.item.itemsArray.title;
        }
        if(this.props.item.message.length === 1 && this.props.item.message[0] === 'Add To Cart'){
            buttonComponent = <Button variant="primary" onClick={this.addToCartClick}>{this.props.item.message[0]}</Button>;
        }else{
            buttonComponent = (
                <>
                <Link to={{
                    pathname: '/add-product',
                    aboutProps: {
                        id: this.props.item.itemsArray.id
                    }
                }}>
                    <Button variant="primary">{this.props.item.message[0]}</Button>
                </Link>&nbsp;&nbsp;&nbsp;
                <Link to="/">
                <Button variant="primary" onClick={this.onDeleteClick}>{this.props.item.message[1]}</Button>
                </Link>
                </>
            );
        }
        // console.log(buttonComponent)
        return(
            <Card style={{ height: 'auto' ,width: '18rem', float: 'left', margin: '10px'}}>
                <Card.Img variant="top" alt={itemName} style={{ height: '18rem' }} src={this.props.item.itemsArray.imageUrl} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>
                        <strong>Price : Rs. {this.props.item.itemsArray.price}</strong><br/>
                        <strong>Quantity : {this.props.item.itemsArray.quantity}</strong><br/>
                        <span onClick={this.handleHover}>{description}</span><br/>
                        {buttonComponent}
                        <Modal onHide={this.handleLeave} show={this.state.modelOpen} animation>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.props.item.itemsArray.title}</Modal.Title>
                            </Modal.Header>
                            <Row>
                                <Col>
                                    <Modal.Body>{this.props.item.itemsArray.description}</Modal.Body>
                                </Col>
                                <Col>
                                    <Row>
                                        <img alt={itemName} style={{height: '150px', width: '200px'}} src={this.props.item.itemsArray.imageUrl}/>
                                    </Row>
                                </Col>
                            </Row>
                            <Modal.Footer>
                                <Col>
                                    <span><strong>Price:</strong></span>
                                    <Button variant="primary">Rs.:{this.props.item.itemsArray.price}/-</Button>
                                </Col>
                                <Col>
                                    <span><strong>Quantity:</strong></span>
                                    <Button variant="secondary">{this.props.item.itemsArray.quantity}</Button>
                                </Col>
                            </Modal.Footer>
                        </Modal>
                    </Card.Text>
                </Card.Body>
            </Card> 
        );
    }
}

export default connect(null,{
    cartData: postCartData,
    delete: deleteAdminData
})(CardMk);