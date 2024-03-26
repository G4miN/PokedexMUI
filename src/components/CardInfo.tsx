export default function CardInfo() {
  return (
    <>
      <div className="pokemon-cardInfo-container">
        <div className="pokemon-cardInfo">
          <img
            src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bb/latest/20200720111430/Empoleon.png/800px-Empoleon.png"
            id="pokemon-image-cardInfo"
          />
          <div className="pokemon-cardInfo-details">
            <p className="pokemon-number-cardInfo" id="pokemon-num-cardInfo">
              #395
            </p>
            <p className="pokemon-name-cardInfo" id="pokemon-name-cardInfo">
              Empoleon
            </p>
            <p className="pokemon-kind-cardInfo">Emperor Pokemon</p>
            <div></div>
            <div className="pokemon-type-cardInfo" id="poke-type-cardInfo">
              <p id="first-pokemon-type">Water</p>
              <p id="second-pokemon-type">Steel</p>
            </div>
            <p className="pokemon-entry-title">POKÉDEX ENTRY</p>
            <p className="pokemon-entry-details">
              It swims as fast as a jet boat. The edges of its wings are sharp
              and can slice apart drifting ice.
            </p>
            <p className="pokemon-abilities-title">ABILITIES</p>
            <div className="pokemon-abilities-info">
              <p className="first-pokemon-ability">Torrent</p>
              <p className="second-pokemon-ability">Defiant</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
