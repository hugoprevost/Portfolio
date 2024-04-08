import React from "react";
import { Link } from "react-router-dom";
import projetInfos from "../../datas/projet";
import "../../utils/style/cardTheme.scss";
import NavTheme from '../../components/NavTheme'

function Productfilter(){

    const game = projetInfos.filter(projetInfos =>
        projetInfos.category === 'Game'
      );

    const listItems = game.map(projetInfos =>
        <article className="card__themeProjet__article" key={projetInfos.id}>
            <Link to={`/projets/${projetInfos.id}`}>
                <div className="card__theme__projet">
                    <img src={projetInfos.cover} alt={projetInfos.title} className="card__theme__projet__img" />
                    <p className="card__theme__projet__title">{projetInfos.title}</p>
                    <p className="card__theme__projet__subtitle">{projetInfos.subtitle}</p>
                </div>
            </Link>
        </article>
      );

    return (
        <>
            <NavTheme/>
            <div className="card__themeProjet">
                {listItems}
            </div>
        </>
    );
};

export default Productfilter;