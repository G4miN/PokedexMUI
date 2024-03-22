import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardInfo from "./components/CardInfo";
export default function App() {
  return (
    <>
      <Navbar id="navbar-container" />
      <div className="container">
        <div id="content">
          <Card />
          <Card />
          <Card />
        </div>
        <div id="content-info">
          <CardInfo />
        </div>
      </div>
    </>
  );
}
