import React from "react";
import { useFormik } from "formik";
import *as Yup from 'yup'
function App(){
   var myform = useFormik({
        initialValues : {
            firstname : '',
            email : '',
        },
        validationSchema : Yup.object({
            firstname : Yup.string().required("asdfg"),
            email : Yup.string().email().required("qwert")
        }),
        onSubmit : (x)=>{
        console.log(x)
        }
    })
    return(
        <div style={{border:'2px solid blue',padding:'10px',margin:'10px'}}>
            <h1>Formik Practical Class</h1>
            <div style={{border:'2px solid green',padding:'10px',margin:'10px'}}></div>
            <form onSubmit={myform.handleSubmit}>
                <input type="text" name="firstname" onChange={myform.handleChange}/>
                <br />
                <input type="email" name="email" onChange={myform.handleChange}/>
                <br />
                {JSON.stringify(myform.errors)}
                <button>Save</button>
            </form>
        </div>
    )
}
export default App;