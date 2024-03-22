import "./App.css";
import NavbarComponent from "./components/Navbar";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <NavbarComponent id="navbar-container" />
      <div className="container">
        <div id="content">
          <Card />
        </div>
        <div id="content-info">klk</div>
      </div>
    </>
  );
}
