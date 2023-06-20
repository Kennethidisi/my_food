import c1 from "./images/c1.png"
import "./company.css"
import { useContext } from "react"
import Footer from "./footer"
import Header from "./header"

export default function Company(){
    

    return(
        <div className="container">
            <Header/>

            <main className="company_main">
                <div className="company_top"><h1>Our company focuses <br/> on <span>food and people</span></h1></div>

                <section className="c_bottom">
                    <div className="c_bottom_left">
                        <h1>The home of <br/> fresh products</h1>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard dummy text <br/> ever since the 1500.</p>

                        <button>Learn about us</button>
                    </div>

                    <div className="c_img">
                        <img src={c1}/>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}