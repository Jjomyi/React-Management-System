import React from "react";

const CustomerDelete = (props) => {
    const deleteCustomer = (id) => {
        const url = '/api/customers/' + id
        fetch(url,{
            method : 'DELETE'
        })
        props.stateRefresh()
    }

    return(
        <button onClick={()=>{deleteCustomer(props.id)}}>삭제</button>
    )
}

export default CustomerDelete