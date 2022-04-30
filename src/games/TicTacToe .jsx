import { React, useState } from "react"
import EndGame from "../components/EndGame";
import Square from "../components/Square";
import './TicTacToe.css';
import { Link } from "react-router-dom";
const INITIAL= "";
const X_PLAYER="X";
const O_PLAYER= "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default  function TicTacToe() {
  const [grid, setGrid]= useState(Array(9).fill(INITIAL));
  const [player,setPlayer]=useState(false);
  const [finished, setFinished]= useState(false);
  const [draw, setDraw]= useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });


  function isGameOver() {
    if (!finished) {
      //* X win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X WON");
          return;
        }
      }

      //* O win check
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setFinished(true);
          setwinCount({ ...winCount, O: winCount.O + 1 });
          return;
        }
      }

      //* Draw game check
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setFinished(true);
      }
    }
  }

  function clearHistory(){
    setwinCount({ X: 0, O: 0 })
    restartGame();
  }
  function restartGame(){
    setGrid(Array(9).fill(INITIAL));
    setFinished(false);
    setDraw(false);
  }

  isGameOver();
   function handleClick(id){
    setGrid(grid.map((item,index)=>{
      if(index===id){
      if(player){
        return X_PLAYER;
      }
      else{
        return O_PLAYER;
      }
    }else {
      return item;
    }
    
  }))
  setPlayer(!player)
  }
  return(
    <div className="center">
      {finished&& (<EndGame 
      winCount={winCount}
      restartGame={restartGame}
      clearHistory={clearHistory}
      player={player} 
      draw={draw}/>)}
    <Square clickedArray={grid} handleClick={handleClick} className="square clicked" />
    </div>

  )

}