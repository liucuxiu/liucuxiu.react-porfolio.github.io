import { useEffect, useRef, useState } from 'react';

function CountRef() {
  const [inputValue, setInputValue] = useState("")
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render count: {count.current}</h1>
    </>
  )
}


export default CountRef


/**The useRef Hook allows you to persist values between renders.

 It can be used to store a mutable value that does not cause a re-render when updated.

 It can be used to access a DOM element directly.
 *
 * **/