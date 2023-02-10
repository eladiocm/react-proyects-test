import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  /* const inputRef = useRef() */
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    // ? FORMA NATIVA DE JAVASCRIPT DE OBTENER LOS INPUTS DE UN FORMULARIO
    /*  const fields = Object.fromEntries(new window.FormData(event.target)) // ! capturamos la data enviada del formulario en cada input
    const query = fields.query // ! obtenemos la información introducida en el input a traves del name
    console.log(query) */
    // ? ***

    // ? Forma de obtener el valor de un input con una referencia de useRef
    /* const inputValue = inputRef.current.value
    console.log(inputValue) */
    // ? ***
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
    debouncedGetMovies(newQuery)
  }
  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            name='query'
            value={search}
            placeholder='Avenger, Star Wars, The Matrix ...'
            onChange={handleChange}
          />
          <button type='submit'>Buscar</button>
        </form>
        <div style={{ marginTop: '12px' }}>
          <label>Ordenar Alfabéticamente</label>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <h3>Cargando ...</h3> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
