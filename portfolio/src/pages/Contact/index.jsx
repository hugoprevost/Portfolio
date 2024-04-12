import HomeIllustration from '../../assets/profil.png'
import Mail from '../../assets/mail.svg'
import Tel from '../../assets/tel.svg'
import '../../utils/style/contact.scss'

function Contact() {
    return (
        <div>
        <div className='contact_presentation'>
          <div className='contact_presentation_texte'>
            <h1>Prevost Hugo,</h1>
            <div className='contact__bloc'>
              <img src={Mail} alt="Profile Hugo Prevost" />
              <p className='contact__img'>h.prevost@lecolededesign.com</p>
            </div>
            <div className='contact__bloc'>
              <img src={Tel} alt="Profile Hugo Prevost" />
              <p className='contact__img'>06.01.44.05.23</p>
            </div>
          </div>
          <div className='contact_presentation_img'>
            <img src={HomeIllustration} alt="Profile Hugo Prevost" />
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact