import React from "react";

type StarType = {
  selected: boolean
  value: number
  onClickStar: (value: number) => void
}

const StarWithoutMemo = (props: StarType) => {

  const circle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: props.selected ? "yellow" : "white",
    cursor: "pointer"
  }
  return (
    <div style={circle} onClick={(e) => {props.onClickStar(props.value)}}></div> // 1 по клику вызывается функция clickStar
  )
}
export const Star = React.memo(StarWithoutMemo)