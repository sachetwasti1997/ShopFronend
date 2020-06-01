import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMk from './CardMake';

class ProductList extends Component{

    componentToRender = () => {
        let arr = this.props.data.map((item, index) => {
            const items = {
                itemsArray: item,
                message: ['Add To Cart']
            }
            return <CardMk key={index} props = {items}/>
        })
        return arr;
    }

    render(){
        console.log(this.props.data);
        return <div>{this.componentToRender()}</div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {data: state.data};
}

export default connect(mapStateToProps)(ProductList);

