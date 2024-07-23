import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName='player 1' symbol='o' />
        <Player initialName='player 2' symbol='x' />
      </ol>
      <GameBoard></GameBoard>
    </div>
  )
}

export default App
