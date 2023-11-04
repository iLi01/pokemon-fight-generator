import Player1 from "../assets/Player1.png";
import Player2 from "../assets/Player2.png";


export default function NameCard () {
  return (
    <section className="NameCard">
      <h1>Random Pokemon team / battle generator</h1>
      <h2>Input your Player/s name:</h2>

      <div className="NameCard-1">
        <img src={Player1} alt="Player 1 icon"></img>
        <input className="Player1" type="text" maxlength="10" placeholder="Player 1 name"></input>
      </div>

      <div className="NameCard-2">
        <img src={Player2} alt="Player 2 icon"></img>
        <input className="Player2" type="text" maxlength="10" placeholder="Player 2 name"></input>
      </div>
    </section>
  )
}