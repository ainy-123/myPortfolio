import React from "react";
import styles from "./Quotes.css";

const day= new Date().getDay();
const quote= day===1?"Be optimistic":day===2?"Know something about Everything and everything about something":day===3?"Be positive":day===4?"Be loyal":day===5?"Be yourself":day===6?"challenge is the key to innovation":"if the product is free,then you are the product";
function Quotes(){
    return <div id="quotes">
        {/* <h2>{quote}</h2> */}
    </div>
}

export default Quotes;