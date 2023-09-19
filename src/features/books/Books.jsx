import React from "react";
import { useDeleteBookMutation, useGetAllBooksQuery, useLazyGetAllBooksQuery } from "../../services/booksApi";
import { Link,Outlet, useNavigate } from "react-router-dom";
function Books(){
    // var x=useGetAllBooksQuery()
    // console.log(x)
    // var x= useDeleteBookMutation()
    // console.log(x)
   var {isLoading,data}=useGetAllBooksQuery()
   var [deleteBookById]=useDeleteBookMutation()
   var [prefetchBooks]=useLazyGetAllBooksQuery()
   var navigate=useNavigate()
   function del(ind){
    deleteBookById(ind).then(()=>{
        prefetchBooks()
    })
   }
    return(
    <div>
            <h1>Books</h1>
           <Link to="addbook"> <button>+AddBook</button></Link>
            {
            isLoading && <h5>(Loading...)</h5>
            }
       <div className="d-flex">
          <div className="w-50">
              <ul>
                {
                !isLoading&&(
                    data.map(function(d){
                        return <li>
                       <h6>{d.id}.{d.title}</h6>
                        <h6>{d.author}</h6>
                        <button onClick={()=>{del(d.id)}}>Delete</button>&nbsp;
                        <button onClick={()=>{navigate("update",{state:d})}}>update</button></li>
                    })
                )
              }
              </ul>
          </div>
               <div className="w-50">
                <Outlet></Outlet>
               </div>
        </div>   
  </div>
    )
}
export default Books;