import React, {useState} from "react";

type PropsType = {
  on: boolean
}

function UncontrolledOnOffComponentWithoutMemo() {
  // console.log("onOff rendering")
  // теперь без переданных пропсов компонента берет состояние из локального стейта
  // let on  = false

  // useState нужен для хранения локального состояния
  let [on, setOn] = useState(true)

  // every style is an object
  const onOffRow = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "20px"
  }
  const onStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: on ? "green" : "white",
    cursor: "pointer",
    color: "pink"
  }
  const offStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: on ? "white" : "red",
    cursor: "pointer",
    color: "pink"
  }
  const indicatorStyle = {
    width: "30px",
    height: "30px",
    // стили в объектах пишуться в camelcase
    borderRadius: "50%",
    backgroundColor: on ? "green" : "red",
    border: "1px solid black"
  }

  // при повторном клике на кнопки компонента onOff
  // отрисовывается повторно с тем же значениемм переменной on.
  // такого происходить не должно по идее, потому что локальный стейт не меняется.
  // а происходит это, потому что реакт не уверен был ли стейт изменен и
  // на всякий случай перерисовывает
  const clickHandler = () => {
    // console.log("on")
    if (!on) setOn(true)
    if (on) setOn(false)
  }

  return (
    <div>
      <div style={onOffRow}>
        <div onClick={clickHandler} style={onStyle}>on</div>
        {/*в реакте можно писать стили прямо в теге*/}
        <div style={indicatorStyle}></div>
        <div onClick={clickHandler} style={offStyle}>off</div>

        {/*другой вариант того, что написано сверху*/}
        {/*<div onClick={() => { setOn(true) }} style={onStyle}>on</div>*/}
        {/*<div style={indicatorStyle}></div>*/}
        {/*<div onClick={() => { setOn(false) }} style={offStyle}>off</div>*/}
      </div>
    </div>
  )
}

export const UncontrolledOnOffComponent = React.memo(UncontrolledOnOffComponentWithoutMemo)