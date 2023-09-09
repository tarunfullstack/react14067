import React from "react";
import *as Yup from 'yup'
import { useFormik } from "formik";
function App(){
    var myform = useFormik({
        initialValues : {
            firstname : "",
            lastname : "",
            age :"",
            email : "",
        },
        validationSchema : Yup.object({
            firstname : Yup.string().required(),
            lastname :Yup.string().required(),
            age:Yup.string().required(),
            email :Yup.string().required(),
        }),
        onSubmit :(x)=>{
            console.log(x)
        }
    })
    return(
        <div style={{border:"2px solid green",padding : "10px",margin : "10px"}}  >
            <h1 style={{border:"3px solid red",padding : "10px",margin : "10px"}}>Student Details </h1>
            <div style={{border:"3px solid black",padding : "10px",margin : "10px"}}>
                <form onSubmit={myform.handleSubmit}>
                    Firstname : <input type="text" name = "firstname" placeholder="firstname"  onChange={myform.handleChange}/> <br/> <br />
                    LastName : <input type="text" name = "lastname" placeholder="lastname" onChange={myform.handleChange}/> <br /> <br />
                    Age : <input type="number" name = "age" placeholder="age" onChange={myform.handleChange}/> <br /> <br />
                    Email : <input type="email" name = "email" placeholder="email" onChange={myform.handleChange}/> <br /> <br />
                    {JSON.stringify(myform.errors)}
                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}
export default App;