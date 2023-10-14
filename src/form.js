import { useState } from "react";
import axios from "axios";
const Form=()=>{
    const [formdata,setFormdata]=useState({
        // 'fname':'',
        // 'lname':'',
        // 'email':'',
        // 'pass':'',
        // 'date':'',
        // 'color':'',
        // 'Gender':'',
        'name':'',
        'rollno':'',
        'college':'',
         'branch':''
    })
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
        // axios.post('http://localhost:2222/adddata',{formdata}).then((result)=>{
        //     console.log(result.body)
        // })

        // axios.post('http://localhost:2222/addstudent',{formdata}).then((result)=>{
        //         console.log(result.data)
        //     })
        axios.post('http://localhost:2222/addstudent',{formdata}).then((result)=>{
                 console.log(result.data)
             }) 
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handlesubmit}>
            {/* <label>First Name : </label>
            <input type="text" name="fname" onChange={(e)=>setFormdata({...formdata,fname:e.target.value})}/>
            <br/>
            <label>Last Name : </label>
            <input type="text" name="lname" onChange={(e)=>setFormdata({...formdata,lname:e.target.value})}/>
            <br/>
            <label>Email : </label>
            <input type="text" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
            <br/>
            <label>password : </label>
		    <input type="password" name="pass" onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/>
            <br/>
            <label>date of birth : </label>
	    	<input type="date" name="date" onChange={(e)=>setFormdata({...formdata,date:e.target.value})}/>
            <br/>
            <label>your favorite color</label>	
		    <input type="color" name="color" onChange={(e)=>setFormdata({...formdata,color:e.target.value})}/>
            <br/>
            <label>Gender : </label>
            <label>Male</label>
            <input type="radio" name="Male" value="Male" onChange={(e)=>setFormdata({...formdata,Gender:e.target.value})}/>	
            <label >Female</label>
            <input type="radio" name="female" value="female" onChange={(e)=>setFormdata({...formdata,Gender:e.target.value})}/>	
            <br/>
            <input type="submit" value='submit'/>
            <input type="reset" value='reset'/> */}

            <label>name : </label>
            <input type="text" name="name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
            <br/>
            <label>Rollno : </label>
            <input type="text" name="rollno" onChange={(e)=>setFormdata({...formdata,rollno:e.target.value})}/>
            <br/>
            <label>College : </label>
            <input type="text" name="college" onChange={(e)=>setFormdata({...formdata,college:e.target.value})}/>
            <br/>
            <label>Branch : </label>
            <input type="text" name="branch" onChange={(e)=>setFormdata({...formdata,branch:e.target.value})}/>
            <br/>
            <input type="submit" value='submit'/>
            </form>
        </div>
    )

}
export default Form;