import { useState } from "react";
//import lighton from './light-bulb-2.jpg';
//import lightoff from './light-bulb-1.jpg';
function Hooks1(){
    const[light,wiring]=useState(false)
    return(
        <div>
            <button onClick={()=>wiring(true)}>on</button>
            <button onClick={()=>wiring(false)}>off</button>
            <br/>
            {
                light==true?<img src="light-bulb-1.jpg"/>:<img src="light-bulb-2.jpg"/>
               // light==true?<img src={lighton}/>:<img src={lightoff}/>
            }
        </div>
    )
}
export default Hooks1