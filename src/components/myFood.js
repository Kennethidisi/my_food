import { useContext, useRef } from "react"
import { cartContext } from "../context"
import "./myFood.css"


export default function Myfood({prod}){
    const btnRef = useRef(null)
    const{cart, setCart} = useContext(cartContext)

        const handleClick = ()=>{
            if(btnRef.current.value === 'Add to Cart'){
                setCart([...cart, prod])
                btnRef.current.value = 'Remove from Cart'
            }else if(btnRef.current.value === 'Remove from Cart'){
                setCart(
                    cart.filter((item)=>{
                        return item.id !== prod.id
                    })
                )
            }
        }

    return(
        <div className="myFood_container">
            <div className="food_img"><img src={prod.img}/></div>
            <div className="f_description">
                <span className="f_name">
                    <h3>{prod.name}</h3>
                    <p className="f_price">$ {prod.price} USD</p>
                </span>
                <p className="f_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div className="add_remove">
                    <input type="button" value={cart.includes(prod)? "Remove from Cart" : "Add to Cart"} ref={btnRef} onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}