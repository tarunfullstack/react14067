import { useFormik } from "formik";
import React from "react";
import *as Yup from "yup"
function App(){
    var myform = useFormik({
        initialValues : {
            projectname : "",
            assignedto : "",
            startdate : "",
            enddate : "",
        },
        validationSchema :Yup.object({
            projectname : Yup.string().required("enter projectname") ,
            assignedto : Yup.string().required("enter person name") ,
            startdate : Yup.string().required("enter stating date") ,
            enddate :Yup.string().required("enter ending date") ,
        }),
        onSubmit :(x)=>{
            console.log(x)
        }
    })
    return(
        <div style={{border:"1px solid black",background : "aqua"}}>
            <h1 >Project Management</h1>
            <form onSubmit={myform.handleSubmit}>
                ProjectName : <input type="text" name="projectname" placeholder="projectname" onChange={myform.handleChange} /> 
                <b>{myform.touched.projectname && myform.errors && myform.errors.projectname}</b> <br /><br />
                Assignedto : <input type="text" name="assignedto" placeholder="assignedto" onChange={myform.handleChange} /> 
                <b>{myform.touched.assignedto && myform.errors && myform.errors.assignedto}</b> <br /><br />
                Startdate : <input type="date" name="startdate" placeholder="dd-mm-yyyy" onChange={myform.handleChange} /> 
                <b>{myform.touched.startdate && myform.errors && myform.errors.startdate}</b> <br /><br />
                Enddate : <input type="date" name="enddate" placeholder="dd-mm-yyyy" onChange={myform.handleChange} /> 
                <b>{myform.touched.enddate && myform.errors && myform.errors.enddate}</b> <br /><br />
                <button>Submit</button>
            
            </form>
        </div>
    )
}
export default App;