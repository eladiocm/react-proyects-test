import { useCatImage } from '../hooks/useCatImage'

export const Otros = () => {
  const { image } = useCatImage({ fact: 'cat' })
  return (
    <>
      {image && <img src={image} />}
    </>
  )
}
