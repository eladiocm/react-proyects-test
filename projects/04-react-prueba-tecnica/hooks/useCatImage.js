import { useEffect, useState } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join('')

    try {
      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          const { url } = response
          setImage(url)
        })
    } catch (err) {
      console.log(err)
    }
  }, [fact])

  /* return { image: `${CAT_PREFIX_IMAGE_URL}${image}` } */
  return { image: `${image ? `${CAT_PREFIX_IMAGE_URL}${image}` : false}` }
}
