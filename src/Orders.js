import React, {useState} from 'react'
import './Orders.css'
import {db} from './firebase'
import {useStateValue} from './StateProvider'

function Orders() {
    const [orders, setOrders] = useState({

    })
    useEffect(()=>{
        if(users){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>{
                setOrders(snapshot.docs(map(
                    doc =>({
                        id:doc.id,
                        data: doc.data()
    
                    })
                )))
            })
        } else {
            setOrders([])
        }

    },[])
    return (
        <div className="orders">
            <h1>Orders</h1>
            <div className="orders__orders">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
