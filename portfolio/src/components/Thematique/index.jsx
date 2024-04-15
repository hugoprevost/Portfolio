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
        <div className="card__thematique">
        {thematique.map((thematique) => {
            return (
            <article className="card__thematique__article" key={thematique.id}>
                <Link to={`/projets/${thematique.id}`}>
                <Card image={thematique.cover} title={thematique.title} />
                </Link>
            </article>
            );
        })}
        </div>
    </div>
  );
};

export default Thematique;