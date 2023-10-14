function Click(){
    const handleClick=()=>{
        alert("clicked")
        document.body.style.backgroundColor='red'
    }
    const handleClick2=(name)=>{
        alert(name)
    }
    const handleInput=(e)=>{
        console.log(e.target.value)
    }
    return(
        <div>
            <h1> React Events</h1>
            <br/>
            <button onClick={handleClick}>Click Here</button>
            <br/>
            <button onClick={()=>handleClick2}>click Here</button>
            <br/>
            <input type="text" name="fname" onChange={handleInput}/>
        </div>
    )
}
export default Click