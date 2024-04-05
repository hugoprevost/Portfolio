import React, { useState } from "react";
import projetInfos from "../../datas/projet";
import "../../utils/style/buttons.scss";
import "../../utils/style/cardTheme.scss";

function Productfilter(){
    const [items, setItem] = useState(projetInfos)

    const filterItem = (catItem)=>{
        const updateItems=projetInfos.filter((curItem)=>{
            return curItem.category === catItem
        })
        setItem(updateItems)
    }
    return (
        <>
            <div className="boutons">
                <button className="bouton__tous" onClick={() => setItem(projetInfos)} >
                Tous
                </button>
                <button className="bouton__categorie" onClick={() => filterItem("UX / UI")} >
                UX / UI
                </button>
                <button className="bouton__categorie" onClick={() => filterItem("Développement")} >
                Développement
                </button>
                <button className="bouton__categorie" onClick={() => filterItem("3D / AR")} >
                3D / AR
                </button> 
            </div>
            <div>
                <div className="card__themeProjet">
                {items.map((Val) => {
                    return (
                        <article className="card__themeProjet__article" key={Val.id}>
                            <div className="card__theme__projet">
                                <img src={Val.cover} alt={Val.title} className="card__theme__projet__img" />
                                <p className="card__theme__projet__title">{Val.title}</p>
                                <p className="card__theme__projet__subtitle">{Val.subtitle}</p>
                            </div>
                        </article>
                    );
                })}
                </div>
            </div>
        </>
    );
};

export default Productfilter;