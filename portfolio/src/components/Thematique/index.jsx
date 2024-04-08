import React from "react";
import { Link } from "react-router-dom";
import {thematique} from "../../datas/index.js";
import Card from "../Card";
import "../../utils/style/thematique.scss";

const Thematique = () => {
  return (
    <div>
        <div>
            <h2 className="sous-titre">Thématiques</h2>
        </div>
        <div className="card__logement">
        {thematique.map((logement) => {
            return (
            <article className="card__logement__article" key={logement.id}>
                <Link to={`/projets/${logement.id}`}>
                <Card image={logement.cover} title={logement.title} />
                </Link>
            </article>
            );
        })}
        </div>
    </div>
  );
};

export default Thematique;