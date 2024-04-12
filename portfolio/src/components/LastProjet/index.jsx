import React from "react";
import { Link } from "react-router-dom";
import {lastProjet} from "../../datas/lastProjet.js";
import CardProjet from "../CardProjet/index.jsx";
import "../../utils/style/lastProjet.scss";

const LastProjet = () => {
  return (
    <div>
      <div className="lastprojet">
          <div>
              <h2 className="sous-titre-lastprojet">Derniers projets</h2>
          </div>
          <div className="card__lastprojet">
          {lastProjet.map((projet) => {
              return (
              <article className="card__lastprojet__article" key={projet.id}>
                  <Link to={`/projets/${projet.id}`}>
                  <CardProjet image={projet.cover} title={projet.title} subtitle={projet.subtitle} />
                  </Link>
              </article>
              );
          })}
          </div>
      </div>
    </div>
  );
};

export default LastProjet;