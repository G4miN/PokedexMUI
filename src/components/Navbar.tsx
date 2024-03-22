export default function Navbar({ id }: { id: string }) {
  return (
    <div>
      <nav className="navbar" id={id}>
        <ul>
          <li>
            <a href="/">
              <i className="fas fa-home"></i>Home
            </a>
          </li>
          <li>
            <a href="/about">
              <i className="fas fa-record-vinyl"></i>Pokedex
            </a>
          </li>
          <li>
            <a href="/contact">
              <i className="fas fa-gamepad"></i>Videogames
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fas fa-layer-group"></i>OCC Pokemon
            </a>
          </li>
          <li>
            <a href="/about">
              <i className="fas fa-tv"></i>TV Pokemon
            </a>
          </li>
          <li>
            <a href="/contact">
              <i className="fas fa-trophy"></i>Play! Pokemon
            </a>
          </li>
          <li>
            <a href="/contact">
              <i className="fas fa-newspaper"></i>News
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
