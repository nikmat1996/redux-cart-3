import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItem from "./SingleItem";

class Order extends Component{
    render(){
        const {data}=this.props
        return(
            <div>
                {
                    data && data.map((item, index)=>{
                        return(
                            <SingleItem key={index} data={item} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data
    }
}

export default connect(mapStateToProps,null)(Order);