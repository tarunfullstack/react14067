import React from "react";
import { useParams } from "react-router-dom";
import { useGetCountryDetailsByNameQuery } from "../../services/countriesApi";
function CountryDetails(){
//    var x= useParams()
//    console.log(x)
var x=useParams();
var {isLoading,data}=useGetCountryDetailsByNameQuery(x.cname)
// var x= useGetCountryDetailsByNameQuery()
// console.log(x)
    return(
    <div className="mybox" style={{width:"60%"}}>
        <h3>{x.cname}&nbsp;CountryDetails</h3>
        {isLoading && <h3>Loading...</h3>}
        {!isLoading && (data.map(function(data){
            return <li>{data.name.common}<br/>
           capital: {data.capital}<br/>
           region:{data.region}<br/>
            </li>
        }))
    }
    </div>
    )
}
export default CountryDetails;