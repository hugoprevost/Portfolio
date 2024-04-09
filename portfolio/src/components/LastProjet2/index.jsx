import React from "react";
import { Link } from "react-router-dom";
import {lastProjet} from "../../datas/lastProjet.js";
import CardProjet from "../CardProjet/index.jsx";
import "../../utils/style/lastProjet2.scss";

const LastProjet2 = () => {
  return (
    <div>
      <div className="lastprojet2">
          <div>
              <h2 className="sous-titre-lastprojet2">Derniers projets</h2>
          </div>
          <div className="card__lastprojet2">
          {lastProjet.map((projet) => {
              return (
              <article className="card__lastprojet2__article2" key={projet.id}>
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

export default LastProjet2;