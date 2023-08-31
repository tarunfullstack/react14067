import React from "react";
import axios from "axios"
function vacation(){
    axios.get("'https://course-api.com/react-tours-project'").then(function(res){
        console.log(res.data)
    })
}