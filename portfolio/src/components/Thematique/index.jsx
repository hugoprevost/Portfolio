import React from "react";
import { Link } from "react-router-dom";
import {thematique} from "../../datas/index.js";
import Card from "../Card";
import "../../utils/style/thematique.scss";

const Thematique = () => {
  return (
    <div className="card__logement">
      {thematique.map((logement) => {
        return (
          <article className="card__logement__article" key={logement.id}>
            <Link to={`/products/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Thematique;