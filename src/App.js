import React from "react";
import Ipl from './Ipl';
import './index.css';
function App(){
    var[x,setX]=React.useState([
        {
            teamname:'Mumbai Indians',
      players:[
        'Rohit Sharma',
        'Surya Kumar Yadav',
        'Ishan Kishan',
        'Jasprit Bhumrah',
        'David Warner'
      ]
    },
    {
      teamname:'Royal Challengers Bengaluru',
      players:[
        'Virat Kohli',
        'Faf Duplesis',
        'Dinesh Karthik',
        'Glenn Maxwell',
        'Mohammad Siraj'
      ]
    },
    {
      teamname:'Sunrisers Hyderabad',
      players:[
        'Kane Williamson',
        'Manish Pandey',
        'Bhuvaneshwar Kumar',
        'David Warner',
        'Karan Sharma'
      ]
    },
    {
      teamname:'Chennai Super Kings',
      players:[
        'Mahender Singh Dhoni',
        'Suresh Raina',
        'Ravindra Jadeja',
        'Ambati Rayudu',
        'Ben Stokes'
      ]
    } 
]  )
return(
    <div className="box">
        <h1>Welcome to Edupoly React</h1>
        {
            x.map((team)=>{
                return <Ipl team={team.players} tname={team.teamname}></Ipl>
            })
        }
    </div>
)
} 
export default App; 
