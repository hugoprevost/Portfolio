import { Link} from 'react-router-dom'
import '../../utils/style/footer.scss'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'


function Footer() {
    return (
        <nav className='footer__nav'>
          <Link to="https://www.linkedin.com/in/hugo-prevost-01878a105/" target="_blank">
            <img className='footer__logo' src={Linkedin} alt='Logo Linkedin' />
          </Link>
          <Link to="https://github.com/hugoprevost" target="_blank">
            <img className='footer__logo' src={Github} alt='Logo Github' />
          </Link>
        </nav>
      )
}

export default Footer