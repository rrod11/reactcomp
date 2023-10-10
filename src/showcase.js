import Char from "./images/charizard.jpg";
function Showcase() {
  const favPokemon = "Charizard";
  const pokeCharacteristics = {
    type: "fire",
    move: "Incinerate",
  };
  return (
    <div>
      {favPokemon}s<h1>Showcase Component</h1>
      <img src={Char} alt="Charizard"></img>
      <h2>
        Charizard's type if <span>{pokeCharacteristics.type}</span> and one of
        their moves is <span>{pokeCharacteristics.move}<span/>
      </h2>
    </div>
  );
}

export default Showcase;
