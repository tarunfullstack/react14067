import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { useLazyGetAllBooksQuery, useUpdateBookMutation } from "../../services/booksApi";
function UpdateBook(){
//    var x=useLocation()
//    console.log(x)
var [updateBookDetails]=useUpdateBookMutation();
var [prefetchBooks]=useLazyGetAllBooksQuery()
var [selectedBook,setSelectedBook]=useState({
    title:"",
    author:"",
    id:""
})
var {state}=useLocation()
useEffect(()=>{
    setSelectedBook({...state})
},[state])
function update(){
    updateBookDetails(selectedBook).then(()=>{
        prefetchBooks()
    })
}
    return(
    <div>
        <h1>UpdateBook</h1>
       {
        state&&(
        <div>
         <input type="text"  placeholder="Enter Title" value={selectedBook.title}  onChange={(event)=>{setSelectedBook({...selectedBook,title:event.target.value})}}/><br />
         <input type="text"  placeholder="Enter Author" value={selectedBook.author}  onChange={(event)=>{setSelectedBook({...selectedBook,author:event.target.value})}}/><br />
         <button onClick={()=>{update()}}>Update Data</button>
         </div>
        )
        }
    </div>
    )
}
export default UpdateBook;