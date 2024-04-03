import React from "react";
import { Link } from "react-router-dom";
import {lastProjet} from "../../datas/projet.js";
import CardProjet from "../CardProjet/index.jsx";
import "../../utils/style/lastProjet.scss";

const LastProjet = () => {
  return (
    <div className="lastprojet">
        <div>
            <h2 className="sous-titre-lastprojet">Derniers projets</h2>
        </div>
        <div className="card__lastprojet">
        {lastProjet.map((logement) => {
            return (
            <article className="card__lastprojet__article" key={logement.id}>
                <Link to={`/products/${logement.id}`}>
                <CardProjet image={logement.cover} title={logement.title} subtitle={logement.subtitle} />
                </Link>
            </article>
            );
        })}
        </div>
        <Link to={`/products/`} className="link-projet"> Voir tous les projets </Link>
        
    </div>
  );
};

export default LastProjet;