import { Navigate, useParams } from "react-router-dom";
import projetInfos from "../../datas/projet"
import Tags from "../../components/Tags";
import LastProjet2 from '../../components/LastProjet2'
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
        gui,
        imgs,
        mockups
    } = projet;


    return (
        <>
            <div>
                <div>
                    <div className="">
                        <img src={cover} alt={title} className="card__projet__img"/>
                    </div>
                    <div className="projet">
                        <div className="tags__groupe">
                            {tags.map((tag, index) => (
                                <Tags key={index} projettag={tag} />
                            ))}
                        </div>
                        <div>
                            <h2 className="projet__titre">{title}</h2>
                            <p className="projet__texte">{texte}</p>
                        </div>
                        <div className="gui">
                            <img src={gui} alt={title} className="card__projet__img"/>
                        </div>
                        <div className="img__groupe">
                            {imgs.map((img, index)=>(
                                <img key={index} src={img} alt={title} className="img__solo"/>
                            ))}
                        </div>
                        <div className="mockup__groupe">
                            {mockups.map((mockup, index)=>(
                                <img key={index} src={mockup} alt={title} className="mockup__solo"/>
                            ))}
                        </div>
                    </div>
                </div>
                <LastProjet2/>
            </div>
        </>
    );
}
  
  export default Projet