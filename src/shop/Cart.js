import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchCartData} from '../actions/index';

class Cart extends Component{

    componentDidMount(){
        this.props.fetchdata();
    }

    render(){
        console.log(this.props)
        return <div>Cart</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

export default connect( mapStateToProps , {
    fetchdata: fetchCartData
})(Cart);

