import {useState} from "react";

type UncontrolledAccordionType = {
  title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionType) {
  let [collapsed, setCollapsed] = useState(true)

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
    collapsed ? setCollapsed(false) : setCollapsed(true)
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

export default UncontrolledAccordion