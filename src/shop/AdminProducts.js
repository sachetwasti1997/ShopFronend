import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMk from './CardMake';

class AdminProduct extends Component{
    
    componentToRender = () => {
        const arr = [];
        for(let [key, item] of Object.entries(this.props.data)){
            const items = {
                itemsArray: item,
                message: ['Edit', 'Delete']
            }
            arr.push(<CardMk key={item.id} item = {items}/>);
        }
        return arr;
    }

    render(){
        console.log(this.props.data);
        return <>{this.componentToRender()}</>
    }
}

const mapStateToProps = (state) => {
    return {data: state.data}
}

export default connect(mapStateToProps)(AdminProduct);

