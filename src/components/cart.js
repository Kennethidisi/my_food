import { useContext, useEffect, useState } from "react"
import {cartContext} from "../context"
import "./cart.css"
import Myfood from "./myFood"
import Header from "./header"

export default function Cart(){
    const {cart, setCart} = useContext(cartContext);
    const [total, setTotal] = useState()

    useEffect(()=>{
            const myTotal = cart.reduce((total, item)=>{
                return total + Number(item.price)
            },0)

            setTotal(myTotal.toFixed(2))
        
    },[cart])

    if(cart.length === 0){
        return(
            <div className="container">
            <Header/>

            <main className="cart_main">
                <div className="cart_top">
                    <h1>My Carts</h1>
                    <h3>Total Amount: $ <span>{total}</span> USD</h3>
                </div>

                <div className="noCart_div">
                     <h1>Your cart is empty</h1>
                </div>
            </main>
        </div>
        )
    }

    return(
        <div className="container">
            <Header/>

            <main className="cart_main">
                <div className="cart_top">
                    <h1>My Carts</h1>
                    <h3>Total Amount: $ <span>{total}</span> USD</h3>
                </div>

                <div className="cart_div">
                    {
                        cart.map((prod)=>{
                            return <Myfood prod = {prod}/>
                        })
                    }
                </div>
            </main>
        </div>
    )
}