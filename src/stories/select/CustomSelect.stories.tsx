import React from "react"
import {CustomSelect, items} from "./CustomSelect";
import {action} from "@storybook/addon-actions";

export default {
  title: "Custom Select",
  component: CustomSelect
}

type CustomSelectType = {

}

export const CustomSelectStory = () => {

  return (
    <div style={{display: "flex", gap: "30px"}}>
      <div>
        <h1>Custom Select with Value</h1>
        <CustomSelect onChange={action("value changed")} value={"4"} items={items}/>
      </div>



      <div>
        <h1>Custom Select withoutValue</h1>
        <CustomSelect onChange={action("value changed")} items={items}/>
      </div>

      <div>
        <select>
          <option value="1">one</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
          <option value="5">five</option>
        </select>
      </div>
    </div>
  )
}

export const CustomSelectStoryWithoutValue = () => {

  return (
    <div>
      <h1>Custom Select withoutValue</h1>
      <CustomSelect onChange={action("value changed")} items={items}/>
    </div>
  )
}
