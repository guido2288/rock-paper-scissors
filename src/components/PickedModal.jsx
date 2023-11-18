const PickedModal = ({playerPicked , housePicked , result , handleReset}) => {

  return (
    <>
    <section className="pickedModal">

        <div className={playerPicked} >
            <div className={`bg bg-${playerPicked} ${result == "YOU WIN" ? "pulsate-fwd" : ""}`} >
                <img src={`/images/icon-${playerPicked}.svg`} alt={playerPicked} className="img-item"/>
            </div>
        <p>YOU PICKED</p>
        </div>

    {
        housePicked == "" 
        ?   <div className="loading" >
                <div className="bg bg-loading">
            </div>
                <p>THE HOUSE PICKED</p>
            </div>

        :   <div className={housePicked} >
                <div className={`bg bg-${housePicked} ${result == "YOU LOSE" ? "pulsate-fwd" : ""}`} >
                    <img src={`/images/icon-${housePicked}.svg`} alt={housePicked} className="img-item"/>
                </div>
                <p>THE HOUSE PICKED</p>
            </div>
    }

    </section>

    {
        !result ? <></>
        :   <section className="results-container">
                <h2>{result}</h2>
                <button onClick={handleReset}>PLAY AGAIN</button>
            </section>
    }



    </>

  )
}

export default PickedModal