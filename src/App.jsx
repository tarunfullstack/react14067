import React from "react";
import Books from "./Books";
function App(){
    return(
        <div className="box">
        <h1>Welcome to Edupoly ReactJS Training</h1>
        <Books></Books>
        </div>
    )
}
export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// function Books(){
//    var[books,setBooks]=useState([])
//    var [editFlag,setEditFlag]=useState(false)
//    var[newbook,setNewBook] =useState({title:"",author:"",purchase:""})
//    var[selectedBook,setSelectedBook]=useState(null)
//     useEffect(()=>{
//         getBooks()
//     },[])
//     function addBook(){
//         axios.post("http://localhost:4000/books",newbook).then(function(res){
//          getBooks();
//         })
//     }
//     function getBooks(){
//         axios.get("http://localhost:4000/books").then(function(res){
//             setBooks([...res.data])
//         }).catch(()=>{})
//     }
//     function deleteBook(id){
//         axios.delete("http://localhost:4000/books/"+id).then(function(){  
//           getBooks();
//         })
//     }
//     function editBook(book){
//         setSelectedBook({...book})
//         setEditFlag(true)
//     }
//     function updateBook(){
//         axios.put("http://localhost:4000/books/"+selectedBook.id,selectedBook).then(function(res){
//             setBooks()
//         })
//     }
//     return(
//         <div className="box">
//              <h1>Books</h1>
//     {
//         !editFlag && (
//             <div>
//             <input type="text" placeholder="enter title"  onChange={(e)=>{setNewBook({...newbook,title:e.target.value})}} /> <br />
//             <input type="text" placeholder="enter author" onChange={(e)=>{setNewBook({...newbook,author:e.target.value})}} /> <br />
//             <input type="radio" name="offline" value="Offline" />Offline
//              <input type="radio" name="online" value="Online" />Online  <br />
//             <button onClick={()=>{addBook()}}>Add Book</button>
           
//             </div>
//         )
        
//     }
    
//      {
//         editFlag && (
//             <div>
//             <input type="text" placeholder="enter title"   onChange={(e)=>{setNewBook({...newbook,title:e.target.value})}} /> <br />
//             <input type="text" placeholder="enter author"  onChange={(e)=>{setNewBook({...newbook,author:e.target.value})}} /> <br />
//             <button onClick={()=>{updateBook()}}>Update Book</button>
//             </div>
//         )
//     }
//             <ul id="dd">
//             {
//                 books.length>0 && books.map((book)=>{
//                     return  <li>
//                             <h2>{book.id}.{book.title}</h2> 
//                              <h5>{book.author.toUpperCase()}</h5>
//                               <h5>{book.purchase}</h5>
//                              <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
//                              <button onClick={()=>{editBook(book)}}>Edit</button>
//                         </li>
//                 })
//             }
//             </ul>
//         </div>
//     )
// }
// export default Books;