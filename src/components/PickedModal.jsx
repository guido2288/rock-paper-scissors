const PickedModal = ({playerPicked}) => {

  return (
    <section className="pickedModal">
        <div className={playerPicked} >
          <div className={`bg bg-${playerPicked}`} >
            <img src={`/images/icon-${playerPicked}.svg`} alt={playerPicked} className="img-item"/>
          </div>
        <p>YOU PICKED</p>
        </div>

        <div className="loading" >
          <div className="bg bg-loading">
            
          </div>
        <p>THE HOUSE PICKED</p>
        </div>
    </section>
  )
}

export default PickedModal