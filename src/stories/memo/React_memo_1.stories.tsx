import {useMemo, useState} from "react";

export default {
  title: "useMemo"
}

export const Example1 = () => {

  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultB = 1

  const resultA: number = useMemo(() => {
    let tempResultA = 1
    console.log(123)
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 100) {
        fake++
        const fakeValue = Math.random()
      }

      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])


  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return (
    <>
      <input value={a} type="number" onChange={(e) => {setA(Number(e.currentTarget.value))}}/>
      <input value={b} type="number" onChange={(e) => {setB(Number(e.currentTarget.value))}}/>

      <hr />

      <div>result for a {resultA}</div>
      <div>result for b {resultB}</div>
    </>
  )
}