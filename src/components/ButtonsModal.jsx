
const ButtonsModal = ({handleSelect}) => {

  return (
    <section className="buttons_container">
        <img src="/images/bg-pentagon.svg" alt="pentagon" className="pentagon"/>

        <div className="scissors" onClick={() => handleSelect("scissors")}>
          <div className="bg bg-scissors">
            <img src="/images/icon-scissors.svg" alt="scissors" className="img-item"/>
          </div>
        </div>

        <div className="paper" onClick={() => handleSelect("paper")}>
          <div className="bg bg-paper">
            <img src="/images/icon-paper.svg" alt="paper" className="img-item"/>
          </div>
        </div>

        <div className="rock" onClick={() => handleSelect("rock")}>
          <div className="bg bg-rock">
            <img src="/images/icon-rock.svg" alt="rock" className="img-item"/>
          </div>
        </div>

        <div className="lizard" onClick={() => handleSelect("lizard")}>
          <div className="bg bg-lizard">
            <img src="/images/icon-lizard.svg" alt="lizard" className="img-item"/>
          </div>
        </div>

        <div className="spock" onClick={() => handleSelect("spock")}>
          <div className="bg bg-spock">
            <img src="/images/icon-spock.svg" alt="spock" className="img-item"/>
          </div>
        </div>

  </section>
  )
}

export default ButtonsModal