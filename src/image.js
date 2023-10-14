import img from './image1.jpg';
import img1 from './image2.jpg';
const Image=()=>{
    return(
        <div>
            <h1>Images</h1>
            <img src={img} alt='' style={{height:"200px",width:"200px"}}/>
            <img src={img1} alt='' style={{height:"200px",width:"200px"}}/>
            <img src='./logo192.png' alt=""/>
        </div>
    )
}
export default Image