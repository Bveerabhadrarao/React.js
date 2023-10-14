import Students from "./Students";
// import Students from "../students";

function Trainees2(){
    let trainees=[{
        name:'ganesh',
        rollno:76545,
    },
    {
        name:'nivas',
        rollno:52364,
    }, 
    {
        name:'veera',
        rollno:28733
    }]
    return(
        <div>
            {/* <h2>Trainees List</h2>
            <Student name='ganesh  123  ECE'/>
            <Student name='nivas'/>
            <Student name='veera'/> */}
            <h3>Trainees</h3>
            <table border={1} cellSpacing={0} align="center" width={'200px'}>
                <tr><th>S.No</th><th>Name</th><th>Roll No</th></tr>
            {
                trainees.map((ele,i)=>{
                    return(<Students index={i+1}name={ele.name} rollno={ele.rollno}/>)
                })
            }
            </table>
        </div>
    )
}
export default Trainees2