import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemoryGame from './games/memoryGame';
import TicTacToe from './games/TicTacToe ';
import { Link } from 'react-router-dom';


function App() {

  return (
  
    <Router>
    
   <div className="App">

   <h3><a href='/memory' style={{color: "white"}}>Game Memory</a></h3>
   <h3><a href='/tictactoe' style={{color: "white"}}>Game TictacToe</a></h3>

  
     <Switch>
       <Route path="/memory">
       <MemoryGame/>
       </Route>
       <Route path="/tictactoe">
       <TicTacToe/>
       </Route>
     </Switch>
    </div>
    </Router>
 
  );
}

export default App;
