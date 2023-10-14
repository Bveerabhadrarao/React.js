function Css(){
    const internal={
        color:"orange",//internal stylling
    }
    return(
        <>
        <div className="App">
        <h2 style={{color:"blue"}} id="hh">using css styles</h2> 
        <h2 style={internal} id="hh">using internal styles</h2> 
        </div>
        </>
    )
}
export default Css