import { store } from "./app/store";
import { Provider } from "react-redux";
import Header from "./shared/Header";
import { Outlet } from "react-router-dom";
import Counter from "./features/counter/Counter"; 
import Todolist from "./features/todolist/Todolist";
function App(){
    return(
       
        <Provider store={store}>
             <div>
            <Header></Header>
       <Outlet></Outlet>
       </div> 
       </Provider>
    )
}
export default App;