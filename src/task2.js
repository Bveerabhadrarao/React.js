import { useState } from "react";
function Hooks2(){
    const[apple,cutapple]=useState(false)
    return(
        <div>
            <button onClick={()=>cutapple(true)}>full</button>
            <button onClick={()=>cutapple(false)}>cut</button>
            <br/>
            {
                apple===true?<img src="apple.jpg"/>:<img src="applecut.jpg"/>
               
            }
        </div>
    )
}
export default Hooks2
