import { useState } from "react";
import axios from "axios";
import {useEffect} from "react";
import { useParams } from "react-router-dom";
const Editform=()=>{
    const [formdata,setFormdata]=useState({
        'name':'',
        // 'lname':'',
        // 'dateofbirth':'',
        'rollno':'',
        // 'gender':'',
        'college':'',
        // 'favouritecolour':'',
        // 'email':'',
        'branch':''
    })

    const {id}=useParams()
    useEffect(()=>{
        axios.get('http://localhost:2222/getstudentbyid/'+id).then((Response)=>{
            console.log(Response.data.studentdata)
            setFormdata(Response.data.studentdata)
        });
    },[]);

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.put('http://localhost:2222/updatestudent'+id,{formdata}).then((result)=>{
        console.log(result.data)
          
        })
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handlesubmit}>
            <label>First Name</label>
            <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/><br/>
            {/* <label>Last Name</label>
            <input type="text" name="lname" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
            <br/><br/>
            <label>Date Of Birth</label>
            <input type="date" name="dob" onChange={(e)=>setFormdata({...formdata,dateofbirth:e.target.value})}/>
            <br/><br/> */}
            <label>Rollno</label>
            <input type="text" name="rollno" value={formdata.rollno} onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
            <br/><br/>
            {/* <label>Gender:</label>
            <input type="radio" name="male" value="male" onChange={(e)=>setFormdata({...formdata,gender:e.target.value})}/>
            <label>Male</label>
            <input type="radio" name="female" value="female" onChange={(e)=>setFormdata({...formdata,gender:e.target.value})}/>
            <label>Female</label>
            <br/><br/> */}
            <label>College</label>
            <input type="text" name="college" value={formdata.college} onChange={(e)=>setFormdata({...formdata,college:e.target.value})}/>
            <br/><br/>
            {/* <label>Favourite Colour</label>
            <input type="color" name="email" onChange={(e)=>setFormdata({...formdata,favouritecolour:e.target.value})}/>
            <br/><br/>
            <label>Email</label>
            <input type="text" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            <br/><br/> */}
            <label>Branch</label>
            <input type="text" name="branch" value={formdata.branch} onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}/>
            <br/><br/>
            <input type="submit" value='Update'/>
            {/* <button type="reset">Reset</button> */}
            </form>
        </div>
    )

}
export default Editform;