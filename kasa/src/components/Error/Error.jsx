// import "./App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imgError from "../Error/Error404.png";

function Error() {
      return (
            <>
                  <div>
                        <Header />
                  </div>
                  <div className="logoErreur">
                        <img src={imgError}></img>
                  </div>

                  <div
                        style={{
                              color: "#ff6060",
                              height: "36px",
                        }}
                  >
                        <h2>Oups, La page que vous demandez n'existe pas</h2>
                  </div>
                  <h3>Retournez sur la page d'accueil</h3>
                  <div>
                        <Footer title={"à propos"} />
                  </div>
            </>
      );
}

export default Error;
