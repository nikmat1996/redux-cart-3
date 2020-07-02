import React from "react";
import {Link}  from "react-router-dom";

function SingleItem(props){
    const {data, handleClick}=props
    return(
        <div>
            <table className="table table-bordered table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">#</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.map((data, index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row"><Link to={`/product/${data.id}`}>{data.id}</Link></th>
                                <td><Link to={`/product/${data.id}`}>{data.name}</Link></td>
                                <td><Link to={`/product/${data.id}`}><img src={data.img} alt={data.name} className="img-fluid" width="100" height="100" /></Link></td>
                                <td><button onClick={()=>handleClick(data)} className="btn btn-outline-warning">Add to cart</button></td>
                            </tr>
                        )
                    })
                }  
                </tbody>
            </table>
        </div>
    )
}

export default SingleItem;