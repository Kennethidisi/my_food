import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home"
import Order from "./components/order"
import Company from "./components/company"
import FAQ from "./components/faq"
import "./app.css"
import Cart from "./components/cart"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}