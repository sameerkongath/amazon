import React from 'react'
import './Order.css'
import moment from "moment"

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, hh:mm')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <CheckoutProduct />
        </div>
    )
}

export default Order
