
const ButtonsModal = () => {
  return (
    <section className="buttons_container">
        <img src="\images\bg-pentagon.svg" alt="pentagon" className="pentagon"/>

        <div className="scissors">
          <div className="bg bg-scissors">
            <img src="\images\icon-scissors.svg" alt="scissors" className="img-item"/>
          </div>
        </div>

        <div className="paper">
          <div className="bg bg-paper">
            <img src="\images\icon-paper.svg" alt="paper" className="img-item"/>
          </div>
        </div>

        <div className="rock">
          <div className="bg bg-rock">
            <img src="\images\icon-rock.svg" alt="rock" className="img-item"/>
          </div>
        </div>

        <div className="lizard">
          <div className="bg bg-lizard">
            <img src="\images\icon-lizard.svg" alt="lizard" className="img-item"/>
          </div>
        </div>

        <div className="spock">
          <div className="bg bg-spock">
            <img src="\images\icon-spock.svg" alt="spock" className="img-item"/>
          </div>
        </div>

  </section>
  )
}

export default ButtonsModal