import { useState } from 'react';

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  })

  const updateColor = () => {
    setCar(prevState => {
      return {...prevState, color: 'blue'}
    })
  }

  return (
    <>
      <h1>My {car.brand} </h1>
      <p>
        It is a {car.color} {car.model}
      </p>
      <button type='button' onClick={updateColor}>update Blue</button>
    </>
  )
}

export default Car