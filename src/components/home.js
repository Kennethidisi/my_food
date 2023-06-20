import {Link} from "react-router-dom"
import "./home.css"
import cartImg from "./images/cart.png"
import logo from "./images/logo.png"
import home1 from "./images/home1.png"
import home2 from "./images/home2.png"
import star from "./images/star.png"
import menu from "./images/menu.png"
import { useContext } from "react"
import { cartContext } from "../context"
import Footer from "./footer"
import Header from "./header"

export default function Home(){
    const {cart} = useContext(cartContext);

    return(
        <div className="container">
            <Header/>

            <main className="home_main">
                <article className="article1">
                    <section className="top_left">
                        <div className="beautiful">
                            <h1>Beautiful food & <br/> takeaway, <span className="deliver">delivered</span> <br/> to your door.</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard dummy text <br/> ever since the 1500.</p>
                        </div>

                        <div className="button_div">
                            <Link to="/order"><button>Place an Order</button></Link>

                            <div className="button_text"> 
                                <span><img src={star}/>Trustpilot</span>

                                <p className="btn_p">4.8 out of 5 <span>based on 2000+ reviews</span></p>
                            </div>
                        </div>
                    </section>

                    <section className="top_right">
                        <img src={home1}/>
                    </section>
                </article>

                <article className="article2">
                    <section className="bottom_left">
                       <div className="the_home">
                            <h1>The home of <br/> fresh products</h1>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard dummy text <br/> ever since the 1500.</p>
                        </div>
                        <Link to="/company"><button>Learn about us</button></Link>
                    </section>

                    <section className="bottom_right">
                        <img src={home2}/>
                    </section>
                </article>

                <Footer/>
            </main>
        </div>
    )
}