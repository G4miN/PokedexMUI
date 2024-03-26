import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardInfo from "./components/CardInfo";
export default function App() {
  return (
    <>
      <div className="main-nav-container">
        <Navbar id="navbar-container" />
      </div>
      <div className="container">
        <div id="content">
          <Card />
          <Card />
          <Card />
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
