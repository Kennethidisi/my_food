import { useState } from "react"

export default function MyFaqs(props){
    const [showFaq, setShowFaq]= useState(false);

    function handleShow(){
        setShowFaq(!showFaq)
    }

    return(
        <div className="my_faq">
                        <span className="my_faq_span">
                            <h3>{props.title}</h3>
                            <small onClick={handleShow}>{showFaq? "x" : "+"}</small>
                        </span>

                        <p style={{
                            display: showFaq? "flex" : "none",
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
        </div>
    )
}