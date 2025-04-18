import React from "react";
import { NavLink } from "react-router";
import "./Card.scss";

function Card({ appart }) {
      return (
            <NavLink to={`/logement/${appart.id}`}>
                  <div key={appart.id} className="card">
                        <img
                              src={appart.cover}
                              alt={appart.title}
                              className="card-image"
                        />
                        <div className="card-title">
                              <h4>{appart.title}</h4>
                        </div>
                  </div>
            </NavLink>
      );
}

export default Card;
