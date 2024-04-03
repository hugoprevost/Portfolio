import React from 'react';
import "../../utils/style/cardProjet.scss";

function CardProjet({image, title, subtitle}) {

    return (
      <div className="card__projet">
        <img src={image} alt={title} className="card__projet__img"/>
        <p className="card__projet__title">{title}</p>
        <p className="card__projet__subtitle">{subtitle}</p>
      </div>
    );
}

export default CardProjet;