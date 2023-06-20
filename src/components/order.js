import foodData from "./data"
import "./order.css"
import { useState } from "react"
import Myfood from "./myFood"
import Footer from "./footer"
import Header from "./header"


const myCategories = ["all", ...new Set(foodData.map((food)=>{
    return food.cat
}))] 

export default function Order(){
    const [foods, setFoods] = useState(foodData)

    const [categories, setCategories] = useState(myCategories)

    const filterItems = (cat)=>{
        if(cat === "all"){
            setFoods(foodData)
            return;
        }
        const newItems = foodData.filter((food)=> food.cat === cat)
        setFoods(newItems)
    }

    return(
        <div className="container">
            <Header/>

            <main className="order_main">
                <div className="order_top">
                    <h1>Get your food <span>delivered</span>, <br/> or <span>pick up</span> in store.</h1>
                </div>

                <div className="btn_prod">
                    <div className="btn_container">
                        {myCategories.map((category, index)=>{
                            return(
                            <button type="button" 
                            onClick={()=>filterItems(category)}
                             key={index}>{category}</button>)
                        })}
                    </div>

                    <div className="my_menu">
                        {
                            foods.map((food)=>{
                                return <Myfood key={food.id} prod = {food}/>
                            })
                        }
                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    )
}