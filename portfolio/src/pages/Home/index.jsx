import HomeIllustration from '../../assets/profil.png'
import '../../utils/style/home.scss'

function Home() {
  return (
    <div className='home_presentation'>
      <div className='home_presentation_texte'>
        <h1>Prevost Hugo,<br></br> UX Designer et Developper</h1>
        <p>Je viens de finir mon master Digital Design avec une alternance de deux ans au sein de l'entreprise Chausson Matériaux où je m'occupais du développement de la marque grâce au différents outils de communication.</p>
      </div>
      <div className='home_presentation_img'>
        <img src={HomeIllustration} alt="Profile Hugo Prevost" />
      </div>
    </div>
  )
}

export default Home