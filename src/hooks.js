import {useState} from "react"
function Hooks(){
    //let cnt=0;
    const[cnt,setCnt]=useState(0)
    const incr=()=>{
        setCnt(cnt+1)
    }
    return(
        <div>
            <h1>React Hook</h1>
            <p>{cnt}</p>
            <button onClick={incr}>Incr by 1</button>
        </div>
    )
}
export default Hooks
