import React ,{useState} from "react";
import { useAddBookMutation, useLazyGetAllBooksQuery } from "../../services/booksApi";
function AddBook(){
    var [newbook,setNewbook]=useState({title:"",author:""})
// var x=useAddBookMutation();
// console.log(x)
var [addNewBook]=useAddBookMutation()
// var x=useLazyGetAllBooksQuery()
// console.log(x)
var [refetchBooks]=useLazyGetAllBooksQuery()
function addbook(){
    addNewBook(newbook).then(()=>{
        refetchBooks();
    })
}
return(
    <div>
        <h1>AddBook</h1>
        <div>
        <input type="text"  placeholder="Enter Title"  onChange={(event)=>{setNewbook({...newbook,title:event.target.value})}}/><br />
        <input type="text"  placeholder="Enter Author"  onChange={(event)=>{setNewbook({...newbook,author:event.target.value})}}/><br />
        <button onClick={()=>{addbook()}}>Add Data</button>
       </div>

    </div>
)
}
export default AddBook;