function App() {


  return (
    <>
      <section className="score_container">
        <ul>
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
          <li>LIZARD</li>
          <li>SPOCK</li>
        </ul>

        <div className="scoreDisplay">
          <p>SCORE</p>
          <p>12</p>
        </div>
      </section>


      <section className="buttons_container">
        <img src="\public\images\bg-pentagon.svg" alt="pentagon" className="pentagon"/>

        <div className="scissors">
          <div className="bg bg-scissors">
            <img src="\public\images\icon-scissors.svg" alt="scissors" className="img-item"/>

          </div>
        </div>

        <div className="paper">
          <div className="bg bg-paper">
            <img src="\public\images\icon-paper.svg" alt="paper" className="img-item"/>
          </div>
        </div>

        <div className="rock">
          <div className="bg bg-rock">
            <img src="\public\images\icon-rock.svg" alt="rock" className="img-item"/>
          </div>
        </div>

        <div className="lizard">
          <div className="bg bg-lizard">
            <img src="\public\images\icon-lizard.svg" alt="lizard" className="img-item"/>
          </div>
        </div>

        <div className="spock">
          <div className="bg bg-spock">
            <img src="\public\images\icon-spock.svg" alt="spock" className="img-item"/>
          </div>
        </div>

      </section>


      <footer>
        <div>
          <button className="btn_rules">RULES</button>
        </div>
      </footer>
    </>
  )
}

export default App
