import React, {useReducer, useState} from "react";

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

type UncontrolledAccordionType = {
  title: string
}

type ActionType = {
  type: string

}

const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return  !state
    default:
      return state
  }

  // if (action.type === TOGGLE_CONSTANT) {
  //   return  !state
  // }
  // return state
}

const UncontrolledAccordionWithoutMemo = (props: UncontrolledAccordionType) => {
  // let [collapsed, setCollapsed] = useState(true)
  let [collapsed, dispatch] = useReducer(reducer, false)


  const toggleButton = {
    backgroundColor: collapsed ? "grey" : "black",
    width: "100px",
    height: "50px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    color: collapsed ? "black" : "grey",
    transition: "all .3s ease",
    marginBottom: "20px"
  }
  const menuList = {
    display: collapsed ? "none" : "block",
    transition: "all .3s ease",
    marginBottom: "20px"
  }
  const toggleMenu = () => {
    dispatch({type: "TOGGLE-COLLAPSED"})
  }

  return (
    <div>
      <div style={toggleButton} onClick={toggleMenu}>{props.title}</div>
      <ul style={menuList}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionWithoutMemo)