export default function Card() {
  return (
    <>
      <div className="pokemon-container">
        <div className="pokemon-card">
          <img
            src="https://media.tenor.com/ogWMlqzl-8kAAAAi/pok%C3%A9mon-turtwig-turtwig.gif"
            id="pokemon-image"
          />
          <div className="pokemon-details">
            <p className="pokemon-number" id="pokemon-num">
              N°387
            </p>
            <p className="pokemon-name" id="pokemon-name">
              Turtwig
            </p>
            <p className="pokemon-type" id="poke-type">
              Grass
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
