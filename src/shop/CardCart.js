import React, { Component } from 'react';
import { Card, Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {deleteCartItem} from '../actions/index';
import { Link } from 'react-router-dom';

class CardCart extends Component{

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

    handleDeleteClick = () => {
        this.props.cartDel(this.props.props);
    }

    getModal = () => {
        return(
            <Modal onHide={this.handleLeave} show={this.state.modelOpen} animation>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.props.data[this.props.props].title}</Modal.Title>
                                </Modal.Header>
                                <Row>
                                    <Col>
                                        <Modal.Body>{this.props.data[this.props.props].description}</Modal.Body>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <img alt={this.props.data[this.props.props].title} style={{height: '150px', width: '200px'}} src={this.props.data[this.props.props].imageUrl}/>
                                        </Row>
                                    </Col>
                                </Row>
                                <Modal.Footer>
                                        <span><strong>Price:</strong></span>
                                        <Button variant="primary">Rs.:{this.props.data[this.props.props].price}/-</Button>
                                        <span><strong>Quantity:</strong></span>
                                        <Button variant="secondary">{this.props.data[this.props.props].quantity}</Button>
                                </Modal.Footer>
                            </Modal>
        );
    }

    returnTruncatedDescription(description){
        let str = '';
        if(description.length <= 90){
            str = description;
        }else{
            for(let i=0; i<90; i++){
                str += description[i];
            }
        }
        str += '...';
        return str;
    }

    render(){
        console.log(this.props.data[this.props.props]);
        console.log(this.props.cart.cart[this.props.props])
        let desc = this.returnTruncatedDescription(this.props.data[this.props.props].description);
        return (
            <Card style={{height: '15rem', width: 'auto', margin:'10px'}}>
                <Container>
                    <Row>
                        <Col>
                            <Card.Img alt = {this.props.data[this.props.props].title} style={{height:'13rem', width:'18rem'}} src={this.props.data[this.props.props].imageUrl}/>
                        </Col>
                        <Col>
                            <Row>
                                <Row style={{height:'90px'}}>
                                    <strong>{this.props.data[this.props.props].title}</strong>
                                </Row>
                                <Row style={{height:'100px'}}>
                                    <p onMouseEnter={this.handleHover}>{desc}</p>
                                    {this.getModal()}
                                </Row>
                                <Row>
                                    <Col style={{width:'145px'}}></Col>
                                    <Button>{this.props.cart.cart[this.props.props].qty}</Button>
                                </Row>
                            </Row>
                        </Col>     
                        <Col>
                            <Row style={{margin:'20px',width:'auto'}}>
                                <Link to="/">
                                    <Button size="lg" onClick={this.handleDeleteClick}>Delete</Button>
                                </Link>
                            </Row>
                            <Row style={{margin:'20px', width:'100%'}}>
                                <Button size="lg">Proceed To Buy</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card> 
            // <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {cart: state.cart, data: state.data}; 
}

export default connect(mapStateToProps,{
    cartDel: deleteCartItem
})(CardCart);
