import { NavLink } from 'react-router-dom'
import '../../utils/style/buttons.scss'



function NavTheme() {
  return (
    <div>
        <div>
            <h2 className="sous-titre-themeProjet">Thématiques projets</h2>
        </div>
        <nav className='boutons'>
        <div>
            <NavLink className={({isActive}) => {return isActive ? " bouton__active" : "bouton__none"}} to="/projets/tous">Tous</NavLink>
            <NavLink className={({isActive}) => {return isActive ? " bouton__active" : "bouton__none"}} to="/projets/ux-ui">UX / UI</NavLink>
            <NavLink className={({isActive}) => {return isActive ? " bouton__active" : "bouton__none"}} to="/projets/developpement">Développement</NavLink>
            <NavLink className={({isActive}) => {return isActive ? " bouton__active" : "bouton__none"}} to="/projets/3d-ar">3D / AR</NavLink>
            <NavLink className={({isActive}) => {return isActive ? " bouton__active" : "bouton__none"}} to="/projets/game">Game</NavLink>
        </div>
        </nav>
    </div>
  )
}

export default NavTheme