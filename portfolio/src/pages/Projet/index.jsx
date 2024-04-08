import { Navigate, useParams } from "react-router-dom";
import projetInfos from "../../datas/projet"
import Tags from "../../components/Tags";
import "../../utils/style/projet.scss";

function Projet() {
    const { id } = useParams();
    const projet = projetInfos.find((projet) => projet.id === id);
    console.log(projet)
    if (!projet) {
        return <Navigate to="/404" />;
    }
    const {
        cover,
        title,
        texte,
        tags,
    } = projet;


    return (
        <>
            <div className="projet">
                <div className="">
                    <div className="">
                        <div className="">
                            <img src={cover} alt={title} className="card__projet__img"/>
                        </div>
                        <div className="tags__groupe">
                            {tags.map((tag, index) => (
                                <Tags key={index} projettag={tag} />
                            ))}
                        </div>
                        <div>
                            <h2 className="projet__titre">{title}</h2>
                            <p className="projet__texte">{texte}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  
  export default Projet