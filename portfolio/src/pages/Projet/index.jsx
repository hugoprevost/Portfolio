import { Navigate, Link ,useParams } from "react-router-dom";
import projetInfos from "../../datas/projet"
import Tags from "../../components/Tags";
import LastProjet2 from '../../components/LastProjet2'
import "../../utils/style/projet.scss";
import GithubBlanc from '../../assets/github-blanc.svg'

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
        mockups,
        github
    } = projet;


    return (
        <>
            <div>
                <div>
                    <div className="projet__cover">
                        <img src={cover} alt={title} className="projet__cover__img"/>
                    </div>
                    <div className="projet">
                        <div className="projet__tags">
                            <div className="projet__tags__groupe">
                                {tags.map((tag, index) => (
                                    <Tags key={index} projettag={tag} />
                                ))}
                            </div>
                            {github && 
                            <div >
                                <Link to={github} target="_blank" className="projet__tags__git">
                                    <div className="projet__tags__git__bloc">
                                        <img className='projet__tags__git__bloc__logo' src={GithubBlanc} alt='Logo Github' />
                                        <p className="projet__tags__git__bloc__texte">Lien vers Github</p>
                                    </div>
                                    
                                </Link>
                            </div>
                            }
                        </div>
                        <div>
                            <h2 className="projet__titre">{title}</h2>
                            <p className="projet__texte">{texte}</p>
                        </div>
                        {gui && 
                            <div className="projet__gui">
                                <img src={gui} alt={title} className="projet__gui__img"/>
                            </div>
                        }
                        <div className="projet__img">
                            {imgs.map((img, index)=>(
                                <img key={index} src={img} alt={title} className="projet__img__solo"/>
                            ))}
                        </div>
                        <div className="projet__mockup">
                            {mockups.map((mockup, index)=>(
                                <img key={index} src={mockup} alt={title} className="projet__mockup__solo"/>
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