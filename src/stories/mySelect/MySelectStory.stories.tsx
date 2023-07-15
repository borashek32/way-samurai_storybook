import React from "react"
import styles from './MySelect.module.css'
import {MySelect} from "./MySelect";

export default {
  title: "My Select",
  component: MySelect
}


export const MySelectStory = () => {

  return (
    <div>
      <MySelect />
    </div>
  )
}