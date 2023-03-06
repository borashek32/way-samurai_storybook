import React, {useState} from "react";
import {Star} from "../UncontrolledRating/Star";

type ControlledRatingTYpes = {
  title: string
  value: number
  setValue: (value: number) => void
}

const ControlledRatingWithoutMemo = (props: ControlledRatingTYpes) => {
  const rating = {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <div style={rating}>
        <Star selected={props.value > 0} value={1} onClickStar={() => {props.setValue(1)}} />
        <Star selected={props.value > 1} value={2} onClickStar={() => {props.setValue(2)}} />
        <Star selected={props.value > 2} value={3} onClickStar={() => {props.setValue(3)}} />
        <Star selected={props.value > 3} value={4} onClickStar={() => {props.setValue(4)}} />
        <Star selected={props.value > 4} value={5} onClickStar={() => {props.setValue(5)}} />
      </div>
    </div>
  )
}

export const ControlledRating = React.memo(ControlledRatingWithoutMemo)