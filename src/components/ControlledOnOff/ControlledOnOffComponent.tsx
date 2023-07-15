import React, {useState} from "react";

type PropsType = {
  on: boolean
  onChange: (on: boolean) => void
}

const ControlledOnOffComponentWithoutMemo = (props: PropsType) => {
  const onOffRow = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "20px"
  }
  const onStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: props.on ? "green" : "white",
    cursor: "pointer",
    color: "pink"
  }
  const offStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: props.on ? "white" : "red",
    cursor: "pointer",
    color: "pink"
  }
  const indicatorStyle = {
    width: "30px",
    height: "30px",
    // стили в объектах пишуться в camelcase
    borderRadius: "50%",
    backgroundColor: props.on ? "green" : "red",
    border: "1px solid black"
  }

  return (
    <div>
      <div style={onOffRow}>
        <div onClick={() => props.onChange(false)} style={onStyle}>on</div>
        {/*в реакте можно писать стили прямо в теге*/}
        <div style={indicatorStyle}></div>
        <div onClick={() => props.onChange(true)} style={offStyle}>off</div>

        {/*другой вариант того, что написано сверху*/}
        {/*<div onClick={() => { setOn(true) }} style={onStyle}>on</div>*/}
        {/*<div style={indicatorStyle}></div>*/}
        {/*<div onClick={() => { setOn(false) }} style={offStyle}>off</div>*/}
      </div>
    </div>
  )
}

export const ControlledOnOffComponent = React.memo(ControlledOnOffComponentWithoutMemo)