const Trainees1=()=>{
    let student=[{
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
        <>
        {student.map((ele)=>{
            return(<ol><li>{ele.name}</li><li>{ele.rollno}</li><li>{ele.college}</li></ol>)
        })
        }
        </>
    )
}
export default Trainees1