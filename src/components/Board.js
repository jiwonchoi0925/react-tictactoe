import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board=({squares,onClick})=>{
  // const [squares,setSquares]=useState(Array(9).fill(null));
  // const [xIsNext, setxIsNext] = useState(true);
  
  
  // const status = `Next Player: ${xIsNext? 'X' : 'O'}`;

  // const handleClick = (i) => {
  //   const newSquares=squares.slice();
  //   if(calculateWinner(newSquares) || newSquares[i]) { //중복 클릭 방지
  //     return;
  //   }
  //   newSquares[i]=xIsNext ? 'X' : 'O';
  //   setSquares(newSquares);
  //   setxIsNext(current => !current);
  // }

  const renderSquare=(i) => {
    return <Square value={squares[i]} 
      onClick={()=> onClick(i)} />
  }

    return (
      <div className='board-wrapper'>
        
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
  
}

export default Board