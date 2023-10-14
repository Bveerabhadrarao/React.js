function Students(props){
    //let myname='boddeti veerabhadrarao'
    return(
        <>
            <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr>
        </>
    )
}export default Students