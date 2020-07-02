import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card } from "react-bootstrap";

class Order extends Component{
    render(){
        const { order } = this.props
        return(
            <div className='container mt-5'>
               <Accordion defaultActiveKey="0">
                    {
                        order && order.map((item, index) =>{
                            let { user, cart, id } = item
                            let orderTotal = 0
                            cart.map(item => orderTotal += item.price)
                            return (
                                <Card key= {id}>
                                    <Accordion.Toggle as={Card.Header} eventKey={id} style= {{display: 'flex'}}>
                                        <div style={{flex: 1}}>{Number(id)}</div>
                                        <div style={{flex: 3}}>{user.name}</div>
                                        <div style={{flex: 3}}>{user.email}</div>
                                        <div style={{flex: 3}}>{user.mobile}</div>
                                        <div style={{flex: 2}}>{cart.length} items</div>
                                        <div style={{flex: 2}}>Rs {orderTotal}</div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={id}>
                                        <Card.Body>
                                            <table className='table table-bordered table-striped table-hover table-dark' >
                                                <thead>
                                                    <tr>
                                                        <td>#</td>
                                                        <td>Name</td>
                                                        <td>Price</td>
                                                        <td>Category</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {item.cart.map((ele,index) => (
                                                        <tr key={ele + index}>
                                                            <td>{index+1}</td>
                                                            <td>{ele.name}</td>
                                                            <td>{ele.price}</td>
                                                            <td>{ele.category}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>           
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    }
                </Accordion>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        order:state.order
    }
}

export default connect(mapStateToProps,null)(Order);