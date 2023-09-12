import React, { useEffect} from "react";
import axios from "axios";
function Countries(){
    var[countries,setCountries]=React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((response)=>{
        setCountries(response.data)
        console.log(response.data)
        })
    },[])
    function Asc(){
        countries.sort(function(a,b){
            var a = a.name.common;
            var b = b.name.common;
            if(a>b){
                return 1
            }
            if(a<b){
                return -1
            }

        })
        setCountries([...countries])
    }
    function Des(){
        countries.sort(function(a,b){
            var a = a.name.common;
            var b = b.name.common;
            if(a>b){
                return -1
            }
            if(a<b){
                return 1
            }
        })
        setCountries([...countries])
    }
    function abc() {
        var x = document.getElementById("dd").value.toLowerCase();
        console.log(x);
        const filteredCountries = countries.filter((s) =>{
            return(
          s.name.common.toLowerCase().startsWith(x))
            }        );
        
        setCountries(filteredCountries);
      }
    return(
        <div className="mybox">
            <div>
                <h1>Countries</h1>
                </div>
            <div className="dt">
                <b>Sort By Population</b>&nbsp;&nbsp;
            <span onClick={Asc}>Ascending</span>&nbsp;&nbsp;
                <span onClick={Des}>Descending</span>&nbsp;&nbsp;
                <input type="text" id="dd" onKeyUp={()=>{abc()}}/>
                <i class="bi bi-search" ></i>
             </div>
           
        <div className="box">
                
            {
                
                countries.length>0 && countries.map((country)=>{
                return(
                    <div className="m-3">
                      <h4>{country.name.common}</h4>
                      <img src={country.flags[1]}></img>
                      <h5> Population:{country.population}</h5>
                    </div>
                )    
                })
            }
        </div>

    </div>
    )
}
export default Countries;