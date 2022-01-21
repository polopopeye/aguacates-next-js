import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState([])

  const productId = query.id

  useEffect(() => {
    window
      .fetch('/api/avo/' + productId)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data })

        setProduct(data)
      })
  }, [])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>

      <div>{product.image}</div>
      <div>{product.name}</div>
    </section>
  )
}

export default ProductPage
