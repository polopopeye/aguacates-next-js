import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        // console.log(data)

        setProductList(data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <>
          <div>{product.image} </div>
          <div>{product.name} </div>
        </>
      ))}
    </div>
  )
}

export default HomePage
