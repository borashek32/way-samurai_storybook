import React, { useEffect, useState } from "react";

export default {
  title: "UseEffect"
}


// export const ExampleUseEffect = () => {

//   const [counter, setCounter] = useState<number>(0)
//   const [fake, setFake] = useState<number>(0)

//   useEffect(() => {
//     console.log("useEffect rendering every change of the component");
//   })

//   useEffect(() => {
//     console.log("useEffect rendering one time");
//   }, [])

//   useEffect(() => {
//     console.log("useEffect rendering when counter changes");
//   }, [counter])

//   return (
//     <>
//       <div>
//         <p>counter</p>
//         <button onClick={() => setCounter(state => state + 1)}>+</button>
//         {fake}
//       </div>
//       <div>
//         <p>fake</p>
//         <button onClick={() => setFake(state => state + 1)}>+</button>
//         {counter}
//       </div>
//     </>
//   )
// }

