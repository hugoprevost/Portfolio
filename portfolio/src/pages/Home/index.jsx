import HomeIllustration from '../../assets/profil.jpg'
import '../../utils/style/home.scss'
import Thematique from '../../components/Thematique'
import LastProjet from '../../components/LastProjet'

function Home() {
  return (
    <div>
      <div className='home_presentation'>
        <div className='home_presentation_texte'>
          <h1>Prevost Hugo,<br></br> UX Designer et Developper</h1>
          <p>Je viens de finir mon master Digital Design avec une alternance de deux ans au sein de l'entreprise Chausson Matériaux où je m'occupais du développement de la marque grâce au différents outils de communication.</p>
        </div>
        <div className='home_presentation_img'>
          <img src={HomeIllustration} alt="Profile Hugo Prevost" />
        </div>
      </div>
      <LastProjet/>
      <Thematique/>
    </div>
  )
}

export default Home