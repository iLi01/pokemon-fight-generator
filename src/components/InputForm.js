import NameCard from "./NameCard";
import RoundsBtn from "./RoundsBtn";
import TeamSize from "./TeamSize";

export default function InputForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <NameCard/>
      <TeamSize/>
      <RoundsBtn/>
      <button type="submit" className="InputForm-button">GENERATE!</button>
    </form>
  );
}