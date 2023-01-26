import { useEffect, useState } from 'react'
import { getRandomFactAsyncAwait } from '../services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const getRefreshFact = () => {
    getRandomFactAsyncAwait().then(newFact => setFact(newFact))
  }

  useEffect(getRefreshFact, [])

  return { fact, getRefreshFact }
}
