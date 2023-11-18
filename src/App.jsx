import { useState } from "react"
import RulesModals from "./components/RulesModals"
import ButtonsModal from "./components/ButtonsModal";
import ScoreModal from "./components/ScoreModal";

function App() {

  const [rules, setRules] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(0);

  const winGame = {
    "🗿": ["✂️", "🦎"],
    "📄": ["🗿", "🖖"],
    "✂️": ["📄", "🦎"],
    "🦎": ["📄", "🖖"],
    "🖖": ["🗿", "✂️"],
  };

  const handleRules = () => {
    if(!rules) setRules(true)
    if(rules) setRules(null)
  }

  const handleSelect = (platerSelection) => {

    const houseRandomPick = Math.floor(Math.random() * 4);
    const houseSelection = Object.keys(winGame)[houseRandomPick];
    
    const games = [platerSelection , houseSelection];

    console.log(games)
    for (const game of games) {
      
      const playerGame = games[0];
      const houseGame = games[1];


      if(winGame[playerGame].includes(houseGame)){
        setScore(score + 1);
        console.log("ganaste!")
      } else {
        console.log("perdiste")
      }

    }
  }

  return (
    <>
      <ScoreModal score={score}/>

      <ButtonsModal handleSelect={handleSelect}/>

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
