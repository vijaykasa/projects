import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../CSS/placeOrder.css"
import { MyConsumer } from './Authcomponent'
const PlaceOrder = () => {

    const{setLoged}=MyConsumer();
    const logOutUser =() =>{
        setLoged(false);
    }

    return (
        <div className='container orderSuucessPage' style={{ 'marginTop': "5%", "marginBottom": "5%", "textAlign": "center" }}>
            <img src="./orderSuccess.png"
                style={{
                    height: 80,
                    width: 110,
                    borderRadius: 8,
                    paddingLeft: "15px",
                }}
                alt="success image" />
            <h1>Order Placed succesfully</h1> <br /><br /><br /><br /><br />

            <div className="button-last">
                <Link to={"/"} className='btn btn-primary'>Go to Home Page</Link>
                <Link to={"/"} className='btn btn-primary' onClick={logOutUser}>Logout</Link>
            </div>
        </div>
    )
}

export default PlaceOrder
