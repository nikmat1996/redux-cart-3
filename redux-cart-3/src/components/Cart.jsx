import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { addToOrder } from '../redux/action'

class Cart extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            mobile: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.addToOrder(this.state)
        this.setState({
            name:'',
            email:'',
            mobile:''
        })
    }
    

    render(){
        const { cart } = this.props
        return !cart.length ? <div className='h1 text-center mt-5'>Your Cart Is Empty</div> 
        :(
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
                <div>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input onChange={this.handleChange} name='name' type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Mobile</label>
                            <div className="col-sm-10">
                                <input onChange={this.handleChange} name='mobile' type="number" className="form-control" id="mobile" placeholder="Mobile" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onChange={this.handleChange} name='email' type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 ">
                                <button onClick={this.handleClick} type="submit" className="btn btn-outline btn-success">Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        cart:state.cartArray,
        order: state.order
    }
}
const mapDispatchToProps = dispatch => ({
    addToOrder : (payload) => dispatch(addToOrder(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);