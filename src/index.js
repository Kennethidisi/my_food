import React from "react"
import  ReactDOM  from "react-dom/client"
import Context from "./context";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context>
        <App/>
    </Context>
)