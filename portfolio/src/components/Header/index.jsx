import { Link, NavLink } from 'react-router-dom'
import '../../utils/style/header.scss'
import CV from "../../assets/CV-Prevost-Hugo.pdf"



function Header() {
  return (
    <nav className='header'>
      <Link to="/" className='header__logo'>Prevost Hugo</Link>
      <div>
        <NavLink className={({isActive}) => {return isActive ? " header__link header__active--link" : "header__link"}} to="/projets/tous">Projets</NavLink>
        <NavLink className={({isActive}) => {return isActive ? " header__link header__active--link" : "header__link"}} to="/contact">Contact</NavLink>
        <a className='header__link_resume' href={CV}  rel='noreferrer' target='_blank'>Résumé</a>
      </div>
    </nav>
  )
}

export default Header