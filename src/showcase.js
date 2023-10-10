import Char from "./images/charizard.jpg";
import "./Showcase.css";
function Showcase() {
  const favPokemon = "Charizard";
  const pokeCharacteristics = {
    type: "fire",
    move: "Incinerate",
  };
  return (
    <div className="wrapper-div-showcase">
      {favPokemon}s<h1>Showcase Component</h1>
      <img src={Char} alt="Charizard" className="fav-pokemon-img"></img>
      <h2>
        Charizard's type is
        <span style={{ backgroundColor: "red", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ color: "orange" }}>{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
