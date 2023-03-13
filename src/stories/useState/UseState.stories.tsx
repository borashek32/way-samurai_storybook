import React, {useState} from "react";

export default {
  title: "React UseState"
}

function generateData() {
  // difficult counting
  console.log("generate data");
  
  return 3456
}

// export const Example1 = () => {
//   console.log('ex')
//
//   // const initValue = useMemo(generateData, [])
//
//   const [counter, setCounter] = useState<number>(1)
//
//   return (
//     <>
//       <button onClick={() => setCounter(state => state + 1)}>
//         +
//       </button>
//       {counter}
//     </>
//   )
// }