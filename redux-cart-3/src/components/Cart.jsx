import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class Cart extends Component{
    render(){
        const {cart}=this.props
        return(
            <div className="container mt-5">
                <div>
                    <table className="table table-bordered table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">name</th>
                            <th scope="col">Image</th>
                            <th scope="col">price</th>
                            <th scope="col">Category</th>
                            <th scope="col">#</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart && cart.map((data, index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row"><Link to={`/product/${data.id}`}>{data.id}</Link></th>
                                        <td><Link to={`/product/${data.id}`}>{data.name}</Link></td>
                                        <td><Link to={`/product/${data.id}`}><img src={data.img} alt={data.name} className="img-fluid" width="100" height="100" /></Link></td>
                                        <td>{data.price}</td>
                                        <td>{data.category}</td>
                                    </tr>
                                )
                            })
                        }  
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        cart:state.cartArray
    }
}

export default connect(mapStateToProps,null)(Cart);