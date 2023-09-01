import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Products(){
    const[products,setProducts]=React.useState([])
   useEffect(function(){
    axios.get("https://fakestoreapi.com/products").
    then(function(res){
        console.log(res.data)
        setProducts([...res.data])
    })
   },[])
   function addcart(){
    const[count,setCount]=React.useState
   }
   return(
    <div>
        {
            <ul className="d-flex flex wrap">
                {
            products.length>0 && products.map((a)=>{
                return (
                    <div className="mybox">
                        <div className="card " style={{width:"18rem"}}>
                        <img src={a.image} className="card-img-top" />
                        <div className="card-body">
                    <h4>{a.title}</h4>
                    <h4>Price :{a.price}</h4>
                    <button onClick={addcart}>Addto Cart</button>
                    </div>
                    </div>
                    </div>
                )
            })
        }
            </ul>
        }
        </div>
   )
}
export default Products 