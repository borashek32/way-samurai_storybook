import { useEffect, useState } from "react"

export default {
  title: "SetTimeout"
}

export const SetTimeout = () => {

  const [counter, setCounter] = useState<number>(0)
  const [fake, setFake] = useState<number>(0)

  console.log("useEffect rendering")

  useEffect(() => {
    
    setInterval(() => {
      console.log("tick", counter);
      setCounter(counter + 1)
    }, 1000)

  }, [])

  // setTimeout(() => console.log("useEffect rendering every change of the component"), 3000)

  return (
    <>
    <p>counter: {counter}, fake: {fake}</p>
      {/* <div>
        <p>counter</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
      </div>
      <div>
        <p>fake</p>
        <button onClick={() => setFake(fake + 1)}>+</button>
        {fake}
      </div> */}
    </>
  )
}