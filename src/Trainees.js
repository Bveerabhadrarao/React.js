// function Trainees(){
//     let students=[{
//         name:'veera',
//         rollno:'21P31A04K5',
//         college:'ACET'
//     },
//     {
//         name:'nivas',
//         rollno:'21P31A04O5',
//         college:'ACET'
//     },
//     {
//         name:'ganesh',
//         rollno:'21P31A04N0',
//         college:'ACET'
//     }]
//     return(
//         <div>
//             <h1>Students list</h1>
//             {students.map((ele,i)=>{
//                 return(<p>{i+1}. {ele.name} {ele.rollno} {ele.college}</p>)
//             })}
//         </div>
//     )

// }
// export default Trainees



function Trainees(){
        let students=[{
            name:'veera',
            rollno:'21P31A04K5',
            college:'ACET'
        },
        {
            name:'nivas',
            rollno:'21P31A04O5',
            college:'ACET'
        },
        {
            name:'ganesh',
            rollno:'21P31A04N0',
            college:'ACET'
        }]
        return(
            <div>
                <h1>Students list</h1>
                <table border={1} cellPadding={1} cellSpacing={1} align="center">
                    <tr><th>s.no</th><th>name</th><th>rollno</th><th>college</th></tr>
                {students.map((ele,i)=>{
                    return(<tr><td>{i+1}.</td>  <td>{ele.name}</td> <td>{ele.rollno}</td> <td>{ele.college}</td></tr>)
                })}
                </table>
            </div>
        )
    
    }
    export default Trainees
    