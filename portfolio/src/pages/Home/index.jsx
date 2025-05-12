import HomeIllustration from '../../assets/profil.jpg'
import '../../utils/style/home.scss'
import Thematique from '../../components/Thematique'
import LastProjet from '../../components/LastProjet'

function Home() {
  return (
    <div>
      <div className='home_presentation'>
        <div className='home_presentation_texte'>
          <h1>Prevost Hugo,<br></br> UX Designer et Développeur</h1>
          <p>Je m'épanouis dans la réalisation d'audit ainsi que le développement, pour améliorer l'expérience utilisateur lors de la visite d'un site ou d'une application. J'ai à cœur d'amener du sens dans toutes mes réalisations. J'aime collaborer avec toutes les parties prenantes et je suis passionné par l'idée de transmettre des valeurs fortes au travers de mes projets.</p>
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