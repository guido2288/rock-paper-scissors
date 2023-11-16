const RulesModals = ({rules , handleRules}) => {

    if(rules === null) return null;

  return (
    <section className="rules_container">
        <div className="rules_modal">
            <h2>RULES</h2>
            <img src="\images\image-rules-bonus.svg" alt="rules-bonus" />
            <img 
                src="\images\icon-close.svg" 
                alt="icon-close" 
                className="icon_close" 
                onClick={handleRules}
            />
        </div>

    </section>
  )
}

export default RulesModals