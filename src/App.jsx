import { useState } from "react"
import RulesModals from "./components/RulesModals"
import ButtonsModal from "./components/ButtonsModal";
import ScoreModal from "./components/ScoreModal";
import PickedModal from "./components/PickedModal";

function App() {

  const [rules, setRules] = useState(null);
  const [game, setGame] = useState(null);
  const [playerPicked, setplayerPicked] = useState('');
  const [score, setScore] = useState(0);

  const winGame = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["rock", "scissors"],
  };

  const handleRules = () => {
    if(!rules) setRules(true)
    if(rules) setRules(null)
  }

  const handleSelect = (playerSelection) => {

    setplayerPicked(playerSelection)
    setGame(true);

    const houseRandomPick = Math.floor(Math.random() * 4);
    const houseSelection = Object.keys(winGame)[houseRandomPick];
    
    const games = [playerSelection , houseSelection];


    if(winGame[games[0]].includes(games[1])){
      setScore(score + 1);
      console.log("ganaste!")
    } else if(games[0] == games[1]){
      console.log("empate!")
    } else {
      console.log("perdiste")
    }

    
  }

  return (
    <>
      <ScoreModal score={score}/>

      {
        !game ? <ButtonsModal handleSelect={handleSelect}/>
        : <PickedModal playerPicked={playerPicked}/>
      }

      <RulesModals rules={rules} handleRules={handleRules}/>

      <footer>
        <div>
          <button className="btn_rules" onClick={handleRules}>RULES</button>
        </div>
      </footer>
    </>
  )
}

export default App
