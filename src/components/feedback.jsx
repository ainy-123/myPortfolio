import React from "react";

function Feedback()
{
    return (
        <div id="feedback">
            <form>
                <label>
                   <h3>What do you feel? Send a Message...</h3> 
                </label>
                <br />
                <input type="text" placeholder="Type your message here..." name="message" style={{padding:"10px"}}></input>
                <button style={{padding:"10px"}} >Next</button>
            </form>
        </div>
    );
}

export default Feedback;