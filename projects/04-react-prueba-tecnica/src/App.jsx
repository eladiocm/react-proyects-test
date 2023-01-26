import './App.css'
import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'
import { Otros } from '../component/Otros'

export const App = () => {
  const { fact, getRefreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    getRefreshFact()
  }

  return (
    <main className='container'>
      <h1>App supuestamente de gatitos</h1>
      <button onClick={handleClick}>Fetching</button>
      <article>
        {image ? <img src={`${image}`} alt='image of de cat very nice to say :)' /> : <img src='../javascript.svg' alt='Por si no había imagen' />}
        {fact ? <p>{fact}</p> : <p>Cargando...</p>}
      </article>

      <Otros />
    </main>
  )
}
