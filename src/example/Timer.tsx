import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearTimeout(timer)  //Some effects require cleanup to reduce memory leaks.
  }, [])

  return (
    <h1>I have rendered {count} times</h1>
  )
}

export default Timer