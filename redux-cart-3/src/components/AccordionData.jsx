import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default function AccordionData(props) {
    let { item } = props
    let { user, cart, id } = item
    return (
        <div>
            <Card key= {id}>
                <Accordion.Toggle as={Card.Header} eventKey={id} style= {{display: 'flex'}}>
                    <div style={{flex: 1}}>{Number(id)}</div>
                    <div style={{flex: 3}}>{user.name}</div>
                    <div style={{flex: 3}}>{user.email}</div>
                    <div style={{flex: 3}}>{user.mobile}</div>
                    <div style={{flex: 2}}>{cart.length} items</div>
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
        </div>
    )
}
