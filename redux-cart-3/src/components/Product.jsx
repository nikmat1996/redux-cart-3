import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {addToCart} from "../redux/action";

class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            item:[]
        }
    }

    componentDidMount(){
        let {id} = this.props.match? this.props.match.params:"" 
        console.log(id)

        const {data}=this.props
        let product=data.find(ele=>Number(ele.id)===Number(id))
        if(id !== undefined){
            this.setState({
                item:[product]
            })  
        }
        
        if(id===undefined){
            this.setState({
                item: data
            })
        }
    }
    render(){
        const {addToCart}=this.props
        const {item}=this.state
        return(
            <div className="container mt-5">
                <div>
                    <table className="table table-bordered table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">#</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            item && item.map((data, index)=>{
                                return(
                                    <tr key={index}>
                                        <th scope="row"><Link to={`/product/${data.id}`}>{data.id}</Link></th>
                                        <td><Link to={`/product/${data.id}`}>{data.name}</Link></td>
                                        <td><Link to={`/product/${data.id}`}><img src={data.img} alt={data.name} className="img-fluid" width="100" height="100" /></Link></td>
                                        <td>{data.price}</td>
                                        <td>{data.category}</td>
                                        <td><button onClick={()=>addToCart(data)} className="btn btn-outline-warning">Add to cart</button></td>
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
        data:state.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);