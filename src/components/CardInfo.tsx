export default function CardInfo() {
  return (
    <>
      <div className="pokemon-cardInfo-container">
        <div className="pokemon-cardInfo">
          <img
            src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bb/latest/20200720111430/Empoleon.png/800px-Empoleon.png"
            id="pokemon-image-cardInfo"
            width={400}
            height={400}
          />
          <div className="pokemon-cardInfo-details">
            <p className="pokemon-number-cardInfo" id="pokemon-num-cardInfo">
              N°387
            </p>
            <p className="pokemon-name-cardInfo" id="pokemon-name-cardInfo">
              Turtwig
            </p>
            <p className="pokemon-type-cardInfo" id="poke-type-cardInfo">
              Grass
            </p>
          </div>
        </div>
      </div>
    </>
  );
}