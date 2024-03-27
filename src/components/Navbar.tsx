export default function Navbar({ id }: { id: string }) {
  return (
    <nav className="navbar" id={id}>
      <ul>
        <li>
          <a href="/">
            <i className="fas icon-pikachu"></i>
            Home
          </a>
        </li>
        <li>
          <a href="/about">
            <i className="fas icon-pokeball"></i>Pokedex
          </a>
        </li>
        <li>
          <a href="/contact">
            <i className="fas icon-joystick"></i>Videogames
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas icon-card"></i>OCC Pokemon
          </a>
        </li>
        <li>
          <a href="/about">
            <i className="fas icon-animation"></i>TV Pokemon
          </a>
        </li>
        <li>
          <a href="/contact">
            <i className="fas icon-trophy"></i>Play! Pokemon
          </a>
        </li>
        <li>
          <a href="/contact">
            <i className="fas icon-news"></i>News
          </a>
        </li>
      </ul>
    </nav>
  );
}
