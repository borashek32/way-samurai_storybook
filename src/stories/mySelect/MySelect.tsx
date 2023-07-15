import styles from './MySelect.module.css'
import React from "react";

export const items: any[] = [
  {value: '1', title: "one"},
  {value: '2', title: "two"},
  {value: '3', title: "three"},
  {value: '4', title: "four"},
  {value: '5', title: "five"},
]

export const MySelect = (props: any) => {


  return (
    <div>
      <select
        name="#"
        id="#"
        style={{
          appearance: 'none'
        }}
        className={styles.select}
      >
        <option value="#">1</option>
        <option value="#">1</option>
        <option value="#">1</option>
        <option value="#">1</option>
      </select>
    </div>
  )
}