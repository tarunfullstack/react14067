
import React from 'react';
import './App.css';
import Counter from './Count';
import Todolist from './Todolist';

function App() {
return(
  <div className="box">
  <h1>Hello Tarun</h1>
        <Counter s={10} i={10}></Counter>
        <Counter s={20} i={5}></Counter>
        <Todolist></Todolist>
        
        </div>
  );
}

export default App;
