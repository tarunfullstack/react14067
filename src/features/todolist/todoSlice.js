import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    todos : ["Bangalore","Chennai","Mumbai"]
}
export const todoSlice = createSlice({
    name : "todolist",
    initialState,
    reducers :{
        addTodo :(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo :(state,action)=>{
            state.todos.splice(action.payload,1)  
        }
    }
})
export default todoSlice.reducer;
export var{addTodo,deleteTodo}=todoSlice.actions;