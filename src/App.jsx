import { useState } from "react"
import RulesModals from "./components/RulesModals"
import ButtonsModal from "./components/ButtonsModal";
import ScoreModal from "./components/ScoreModal";
import PickedModal from "./components/PickedModal";

function App() {

  const [rules, setRules] = useState(null);
  const [game, setGame] = useState(null);
  const [playerPicked, setplayerPicked] = useState('');
  const [housePicked, sethousePicked] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(() => {
    const scoreFromStorage = window.localStorage.getItem('score');

    if(scoreFromStorage) return JSON.parse(scoreFromStorage);

    return 0;
  });

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

    setplayerPicked(playerSelection);
    setGame(true);

    setTimeout( () => {
      const houseRandomPick = Math.floor(Math.random() * 5);
      const houseSelection = Object.keys(winGame)[houseRandomPick];

      sethousePicked(houseSelection);
      const games = [playerSelection , houseSelection];
  
  
      if(winGame[games[0]].includes(games[1])){
        const newScore = score + 1;
        setScore(newScore);
        window.localStorage.setItem('score', JSON.stringify(newScore))
        setResult("YOU WIN");
      } else if(games[0] == games[1]){
        setResult("TIE");
      } else {
        setResult("YOU LOSE");
      }
    }, 1000 )
    
  }

  const handleReset = () => {
    setGame(null);
    setplayerPicked('');
    sethousePicked('');
    setResult(null);
  }

  return (
    <>
      <ScoreModal score={score}/>

      {
        !game ? <ButtonsModal handleSelect={handleSelect}/>
        : <PickedModal playerPicked={playerPicked} housePicked={housePicked} result={result} handleReset={handleReset}/>
      }

      <RulesModals rules={rules} handleRules={handleRules} />

      <footer>
        <div>
          <button className="btn_rules" onClick={handleRules}>RULES</button>
        </div>
      </footer>
    </>
  )
}

export default App
