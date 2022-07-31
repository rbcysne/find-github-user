import { Link } from "react-router-dom";
import Button from "../../components/Button";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1>Desafio Github API</h1>
        <h4>Bootcamp Spring React - DevSuperior</h4>
      </div>

      <div>
        <Link to="/search">
          <Button text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
