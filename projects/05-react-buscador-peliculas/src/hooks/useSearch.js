import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un numero')
      return
    }

    if (search.length < 2) {
      setError('No se puede buscar una película con menos de 2 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
