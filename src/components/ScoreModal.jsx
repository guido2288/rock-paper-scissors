const ScoreModal = ({score}) => {
  return (
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
          <p>{score}</p>
        </div>
  </section>
  )
}

export default ScoreModal