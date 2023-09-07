import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
function CountryDetails(){
    var {cname}= useParams();
    const[countryDetails,setCountryDetails]=useState(null)
    useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/name/"+cname)
      .then((res)=>{
        setCountryDetails({...res.data[0]})
      })  
    },[cname])
    // console.log(x)
    return(
        <div>
            {
                countryDetails && (
                    <div>
            <h1>{countryDetails.name.common}</h1>
              <img src={countryDetails.flags.png} alt=""/>
              </div>
            )
        }
        </div>
    )
}
export default CountryDetails;