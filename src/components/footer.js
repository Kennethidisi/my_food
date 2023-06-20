import logo from "./images/logo.png"
import i from "./images/instagram.png"
import t from "./images/twitter.png"
import y from "./images/youtube.png"

export default function Footer(){
    return(
        <footer>
            <section>
                <div className="footer_logo">
                    <img src={logo}/>
                    <p>Takeaway & Delivery template <br/> for small-medium business.</p>
                </div>

                <div className="company">
                    <h5>COMPANY</h5>
                    <p>Home</p>
                    <p>Order</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

                <div className="template">
                    <h5>TEMPLATE</h5>
                    <p>Style Guide</p>
                    <p>Changelog</p>
                    <p>License</p>
                    <p>Webflow University</p>
                </div>

                <div className="flowbase">
                    <h5>FLOWBASE</h5>
                    <p>More Cloneables</p>
                </div>
            </section>

            <article>
                <p>&copy; Copyright {new Date().getFullYear()}. All rights reserved. Designed by Kenneth.     Powered by Codeprof Academy. <br/> Phone: 09037918492</p>

                <div className="images">
                    <img src={i}/>
                    <img src={t}/>
                    <img src={y}/>
                </div>
            </article>
        </footer>
    )
}