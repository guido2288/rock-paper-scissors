import { useState } from "react"
import RulesModals from "./components/RulesModals"
import ButtonsModal from "./components/ButtonsModal";
import ScoreModal from "./components/ScoreModal";

function App() {

  const [rules, setRules] = useState(null);

  const handleRules = () => {
    if(!rules) setRules(true)
    if(rules) setRules(null)
  }

  return (
    <>
      <ScoreModal />

      <ButtonsModal />

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
