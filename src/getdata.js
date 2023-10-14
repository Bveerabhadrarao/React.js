import axios from "axios";
import React,{useState,useEffect} from "react";

const Datalist=()=>{
let [student,SetTrainees]=useState([])
// let api ='http://localhost:2222/getstudent';
useEffect(()=>{
    axios.get('http://localhost:2222/getstudent').then((Response)=>{
        console.log(Response.data)
        SetTrainees(Response.data)
    });
},[]);
const Deletestu=(id)=>{
    console.log(id)
    axios.delete('http://localhost:2222/deleteuser/'+id)
    .then(res=>{console.log(res)
    alert("data deleted successfully")
window.location.reload()
})
.catch(err=>{console.log(err)})
}
return(
    <div>
        <br/>
        <h2>Trainees List</h2>
        <table align="center" border={1} cellPadding={1}>
            <tr>
                <th>S.No </th>
                <th>name </th>
                <th>Roll no </th>
                <th>College </th>
                <th>Branch </th>
                <th>Action</th>
            </tr>
            {student && student.map((ele,index,arr)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        {/* <td><Link to={'/}/><button >edit</button></td> */}
                        <td><button onClick={()=>Deletestu(ele._id)}>delete</button></td>

                    </tr>
                )
            })}
        </table>
    </div>
)
}
export default Datalist;
// import axios from "axios";
// import React,{useState,useEffect} from "react";

// const Datalist=()=>{
// let [student,SetTrainees]=useState([])
// // let api ='http://localhost:2222/getstudent';
// useEffect(()=>{
//     axios.get('http://localhost:2222/addstudent').then((Response)=>{
//         console.log(Response.data.studentdata)
//         SetTrainees(Response.data.studentdata)
//     });
// },[]);
// return(
//     <div>
//         <br/>
//         <h2>Trainees List</h2>
//         <table align="center" border={1} cellPadding={1}>
//             <tr>
//                 <th>S.No </th>
//                 <th>name </th>
//                 <th>Roll no </th>
//                 <th>College </th>
//                 <th>Branch </th>
//             </tr>
//             {student && student.map((ele,index,arr)=>{
//                 return(
//                     <tr key={index}>
//                         <td>{index+1}</td>
//                         <td>{ele.name}</td>
//                         <td>{ele.rollno}</td>
//                         <td>{ele.college}</td>
//                         <td>{ele.branch}</td>

//                     </tr>
//                 )
//             })}
//         </table>
//     </div>
// )
// }
// export default Datalist;