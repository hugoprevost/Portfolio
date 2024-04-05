import { Link, NavLink } from 'react-router-dom'
import '../../utils/style/header.scss'



function Header() {
  return (
    <nav className='header'>
      <Link to="/" className='header__logo'>Prevost Hugo</Link>
      <div>
        <NavLink className={({isActive}) => {return isActive ? " header__link header__active--link" : "header__link"}} to="/freelances">Projets</NavLink>
        <NavLink className={({isActive}) => {return isActive ? " header__link header__active--link" : "header__link"}} to="/freelances">Contact</NavLink>
        <NavLink className='header__link_resume' to="/">Résumé</NavLink>
      </div>
    </nav>
  )
}

export default Header