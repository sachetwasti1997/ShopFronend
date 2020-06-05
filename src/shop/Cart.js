import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchCartData} from '../actions/index';
import CardCart from './CardCart';

class Cart extends Component{

    componentDidMount(){
        this.props.fetchdata();
    }

    getCardList(){

        const arrRender = [];

        for(let i in this.props.cart.cart){
            arrRender.push(<CardCart key={i} props={i}/>)
        }
        return arrRender;
    }

    render(){
        console.log(this.props.cart);
        const list = this.getCardList();
        // const list = <div></div>
        return(
            <div>
                {list}
                <strong>Total Price: Rs.{this.props.cart.totalPrice}</strong>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {cart: state.cart};
}

export default connect( mapStateToProps , {
    fetchdata: fetchCartData
})(Cart);

