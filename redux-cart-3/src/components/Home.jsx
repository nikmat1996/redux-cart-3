import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItem from "./SingleItem";
import {addToCart} from "../redux/action";

class Home extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            option: ''
        }
    }

    handleChange = e => {
        this.setState({
            option: e.target.value
        })
    }
    
    render(){
        let {data,addToCart}=this.props
        data = data.filter(item => {
            if(item.category === this.state.option)
                return true
            else if(this.state.option === "all" || this.state.option === "")
                return true
            else
                return false
        })
        return(
            <div className="container mt-5">
                <div className="dropdown">
                    <select onChange={this.handleChange}>
                        <option value='all'>All</option>
                        <option value='antique'>antique</option>
                        <option value='digital'>digital</option>
                        <option value='analog'>analog</option>
                        <option value='clocks'>clocks</option>
                    </select> 
                </div>
                <div className="container mt-5">
                    <SingleItem handleClick={addToCart}  data={data} />
                </div>
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