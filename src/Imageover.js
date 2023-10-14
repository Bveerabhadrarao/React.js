const Click=()=>{
    const handleImage=(e)=>{
        console.log("overed")
        e.target.style.height='400px'
        e.target.style.width='500px'
        //document.body.style.backgroundColor='red'
         e.target.style.backgroundColor='red'
    }
    const handleImage1=(e)=>{
        console.log("out")
        e.target.style.height='300px'
        e.target.style.width='300px'
        //document.elementFromPoint.target.body.style.backgroundColor='orange'
         e.target.style.backgroundColor='red'
    }
    return(
        <div>
            <h1>This is componentD</h1>
            <img src="logo192.png" alt='' onMouseOver={handleImage} onMouseOut={handleImage1}/>

        </div>
    )
}
export default Click
