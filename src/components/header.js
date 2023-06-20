import { Link, NavLink } from "react-router-dom"
import cartImg from "./images/cart.png"
import logo from "./images/logo.png"
import menu from "./images/menu.png"
import { useContext, useState } from "react"
import { cartContext } from "../context"

export default function Header(){
    const[myNav, setMyNav] = useState(false)
    const {cart, setCart}= useContext(cartContext)

    function handleClick(){
        setMyNav((prev)=>{
            return !prev
        })
    }
    console.log(myNav)

    const activeLink = ({isActive})=>{
        return{
            borderBottom: isActive? "3px solid  #41c0c7" : "none" ,
            padding: "5px 0px", 
            color: "#41c0c7"
        }
    }
    return(
        <header>
        <div className="top1">
            <p>We are open and available for takeaway & delivery. <span>Order now.</span></p>
        </div>

        <div className="top2">
            <img src={logo} className="logo" alt=""/>
            <nav className={myNav? "slide" : "noSlide"}>
                <NavLink to="/" style={activeLink}>Home</NavLink>
                <NavLink to="/order" style={activeLink}>Order</NavLink>
                <NavLink to="/company" style={activeLink}>Company</NavLink>
                <NavLink to="/faq" style={activeLink}>FAQ</NavLink>
            </nav>

            <Link to="/cart" className="cart_link">
                    <span className="cart_house">
                       <img src={cartImg} width={25}/>
                       <small className="empty">{cart.length}</small>
                    </span>
            </Link>
            <img src={menu} width={30} className="menu" alt="" onClick={handleClick}/>
        </div>
    </header>
    )
}