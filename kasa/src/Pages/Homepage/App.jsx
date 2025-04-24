import { NavLink } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./App.scss";
import logements from "../../../logements.json";
import Card from "../../components/Card/Card";

function App() {
      const logementCards = logements.map((logement) => (
            <Card key={logement.id} appart={logement} />
      ));

      return (
            <>
                  <Header />
                  <div className="page_container">
                        <div className="banner">
                              <h1 className="chezVous">
                                    Chez vous, partout et ailleurs
                              </h1>
                        </div>

                        <NavLink to="/about"></NavLink>
                        <div id="card-grid" className="card-container">
                              {logementCards}
                        </div>
                  </div>
                  <Footer title={"accueil"} />
            </>
      );
}

export default App;
