import "./faq.css"
import MyFaqs from "./my_faqs"
import Footer from "./footer"
import Header from "./header"

export default function FAQ(){
    return(
        <div className="container">
            <Header/>

            <main className="faq_main">
                <div className="faq_top"><h1>Frequently asked <br/> <span>Questions</span></h1></div>

                <section className="faq_sect">
                    <MyFaqs title = "Do you offer any vegan options?"/>
                    <MyFaqs title = "Can I clone these sections?"/>
                    <MyFaqs title = "Why is Webflow so amazing?"/>
                    <MyFaqs title = "Do you offer any gluten free options?"/>
                    <MyFaqs title= "Do we need to write a business plan?"/>
                    <MyFaqs title= "How can we get funding for our start up?"/>
                </section>
            </main>

            <Footer/>
        </div>
    )
}