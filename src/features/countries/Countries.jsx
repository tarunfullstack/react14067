import React from "react";
import { useGetAllCountriesQuery } from "../../services/countriesApi";
import { Link,Outlet } from "react-router-dom";
function Countries(){
 var {isLoading,data}= useGetAllCountriesQuery()
// var x= useGetAllCountriesQuery()
// console.log(x)
return(
    <div className="mybox d-flex flex-wrap">
        <div className=" w-50">
        <h1>Countries</h1>
        {
         isLoading&&(
            <h4>Loading...</h4>
         )
        }
        {
            !isLoading&&(
                data.map(function(data,i){
                    return <Link to={data.name.common}><li key={i}>{data.name.common}
                    </li></Link>
                })
            )
        }
        </div>
           <div className="w-50">
            <Outlet></Outlet>
           </div>
    </div>
    )
}
export default Countries;