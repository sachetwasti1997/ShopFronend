import React, { Component } from 'react';
import CardMk from './CardMake';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

class LandingPage extends Component{

    getApiData = async () => {
        this.props.getData();
    }

    componentToRender = () => {
        // let arr = this.props.data.map((item, index) => {
        //     const items = {
        //         itemsArray: item,
        //         message: ['Add To Cart']
        //     }
        //     return <CardMk key={index} item = {items}/>
        // })
        const arr = [];
        for(let [key, item] of Object.entries(this.props.data)){
            const items = {
                itemsArray: item,
                message: ['Add To Cart']
            }
            arr.push(<CardMk key={item.id} item = {items}/>);
        }
        return arr;
    }

    componentDidMount(){
        this.getApiData();
    }

    render(){
        console.log("Data", this.props.data);
        return(
            <div>
                {this.componentToRender()}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{
    getData: fetchData
})(LandingPage);


