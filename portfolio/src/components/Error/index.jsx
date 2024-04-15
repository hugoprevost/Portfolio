import Erreur from '../../assets/404.svg'
import '../../utils/style/erreur.scss'


function Error() {
  return (
    <div className='erreur'>
      <h2 className='erreur__titre'>Oups...</h2>
      <img src={Erreur} alt="404 not found" className='erreur__img' />
      <p className='erreur__soustitre'>Il semblerait que la page que vous cherchez n’existe pas</p>
    </div>
  )
}

export default Error