import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../../logements.json";
import Accordion from "../../components/Accordion/Accordion";
import ErrorImg from "../../assets/Error404.png";
import "./Detail.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Detail() {
      const { id } = useParams();
      const logement = logements.find((log) => log.id === id);

      const [currentIndex, setCurrentIndex] = useState(0); // index de l'image actuelle

      if (!logement) {
            return (
                  <>
                        <Header />
                        <div className="detail-error page_container">
                              <div className="logoErreur">
                                    <img src={ErrorImg}></img>
                              </div>

                              <h2>Logement introuvable</h2>
                              <p>
                                    Désolé, aucun logement ne correspond à cet
                                    identifiant.
                              </p>
                        </div>
                        <Footer title="à propos" />
                  </>
            );
      }

      const pictures = logement.pictures;
      const totalPictures = pictures.length;
      // Conversion de la note et définition du total d'étoiles à afficher
      const rating = parseInt(logement.rating, 10);
      const totalStars = 5;

      const goToPrevious = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
            );
      };

      const goToNext = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
            );
      };

      return (
            <>
                  <Header />

                  <div className="detail-container page_container">
                        {/* Galerie d'images avec slider */}
                        <div className="detail-gallery">
                              <div className="image-container">
                                    {totalPictures > 1 && (
                                          <button
                                                className="nav-button left"
                                                onClick={goToPrevious}
                                          >
                                                <ChevronLeft size={32} />
                                          </button>
                                    )}

                                    <img
                                          src={pictures[currentIndex]}
                                          alt={`${logement.title} - image ${
                                                currentIndex + 1
                                          }`}
                                          className="detail-picture"
                                    />

                                    {totalPictures > 1 && (
                                          <button
                                                className="nav-button right"
                                                onClick={goToNext}
                                          >
                                                <ChevronRight size={32} />
                                          </button>
                                    )}

                                    {totalPictures > 1 && (
                                          <div className="counter">
                                                {currentIndex + 1}/
                                                {totalPictures}
                                          </div>
                                    )}
                              </div>
                        </div>

                        <div className="detail-info">
                              <div className="info-left">
                                    <h1 className="titreDetail">
                                          {logement.title}
                                    </h1>

                                    <div className="location">
                                          {logement.location}
                                    </div>

                                    <div className="Tags">
                                          {logement.tags.map((tag, index) => (
                                                <span
                                                      key={index}
                                                      className="tag"
                                                >
                                                      {tag}
                                                </span>
                                          ))}
                                    </div>
                              </div>

                              <div className="info-right">
                                    <div className="proprio">
                                          {logement.host.name}
                                          <img
                                                src={logement.host.picture}
                                                alt={logement.host.name}
                                          />
                                    </div>
                                    {/* Affichage des étoiles en fonction du rating */}
                                    <div className="rating">
                                          {Array.from(
                                                { length: totalStars },
                                                (_, index) => (
                                                      <span
                                                            key={index}
                                                            className={
                                                                  index < rating
                                                                        ? "star colored"
                                                                        : "star"
                                                            }
                                                      >
                                                            ★
                                                      </span>
                                                )
                                          )}
                                    </div>
                              </div>
                        </div>
                        <div className="accordions-container">
                              <Accordion
                                    title="Description"
                                    content={logement.description} //string
                              />
                              <Accordion
                                    title="Equipements"
                                    type={"equipements"}
                                    content={logement.equipments} //tableau
                              />
                        </div>
                  </div>

                  <Footer title="à propos" />
            </>
      );
}

export default Detail;
