import { useEffect, useState } from "react"

export default {
  title: "Clock"
}

type ClockType = {

}

export const Clock: React.FC<ClockType> = (props) => {

  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    console.log("tick");
    const intervalId = setInterval(() => setClock(new Date()), 1000)

    // return () => {
    //   clearInterval(intervalId)
    // }
  }, [])

  // эта ф вместо трех снизу
  const getTwoDigitsStr = (num: number) => (num < 10) ? "0" + num : num

  // const secStr = clock.getSeconds() < 10 ? "0" + clock.getSeconds() : clock.getSeconds()
  // const minStr = clock.getMinutes() < 10 ? "0" + clock.getMinutes() : clock.getMinutes()
  // const hStr = clock.getHours() < 10 ? "0" + clock.getHours() : clock.getHours()

  const secStr = getTwoDigitsStr(clock.getSeconds())
  const minStr = getTwoDigitsStr(clock.getMinutes())
  const hStr = getTwoDigitsStr(clock.getHours())

  return (
    <>
      <span>{hStr}</span>
      : <span>{minStr}</span>
      : <span>{secStr}</span>
    </>
  )
}