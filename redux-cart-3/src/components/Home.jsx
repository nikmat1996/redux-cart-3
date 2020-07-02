import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItem from "./SingleItem";
import {addToCart} from "../redux/action";

class Home extends Component{
    render(){
        const {data,cart,addToCart}=this.props
        console.log(cart)
        return(
            <div className="container mt-5">
                <SingleItem handleClick={addToCart}  data={data} />
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data,
        cart:state.cartArray
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);