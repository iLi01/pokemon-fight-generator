import Pikachu from "../assets/Pikachu.png";

export default function TeamSize () {
  return (
    <>
    <h2>How many Pokemon's will your team have?</h2>
    <section className="TeamSize">

      <div className="TeamInput">
        <input type="number" name="team-size" min="1" max="6" placeholder="1 to 6 Pokemons"></input>
      </div>

          <div className="TeamMembers">
            <div className="TeamMembers-img">
              <img src={Pikachu} alt="Pikachu"></img>
            </div>

            <div className="TeamMembers-img">
              <img src={Pikachu} alt="Pikachu"></img>
            </div>

            <div className="TeamMembers-img">
              <img src={Pikachu} alt="Pikachu"></img>
            </div>

            <div className="TeamMembers-img">
              <img src={Pikachu} alt="Pikachu"></img>
            </div>

            <div className="TeamMembers-img">
              <img src={Pikachu} alt="Pikachu"></img>
            </div>
            <div className="TeamMembers-img">
              <img src={Pikachu} alt="Pikachu"></img>
            </div>

          </div>
      
    </section>
  </>
  )
}