import HomeIllustration from '../../assets/profil.png'
import '../../utils/style/home.scss'

function Contact() {
    return (
        <div>
        <div className='home_presentation'>
          <div className='home_presentation_texte'>
            <h1>Prevost Hugo,</h1>
            <p>h.prevost@lecolededesign.com</p>
            <p>06.01.44.05.23</p>
          </div>
          <div className='home_presentation_img'>
            <img src={HomeIllustration} alt="Profile Hugo Prevost" />
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact