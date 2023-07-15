import React, {useState} from "react"
import {CustomSelect, items} from "./CustomSelect";
import {action} from "@storybook/addon-actions";

export default {
  title: "Custom Select",
  component: CustomSelect
}

type CustomSelectType = {

}

export const CustomSelectStory = () => {

  const [value, setValue] = useState("2")

  return (
    <div>
      <div>
        <h1>Custom Select with Value</h1>
        <CustomSelect
          onChange={setValue}
          value={value}
          items={items}
        />
      </div>

      {/*<div>*/}
      {/*  <h1>Custom Select withoutValue</h1>*/}
      {/*  <CustomSelect onChange={action("value changed")} items={items}/>*/}
      {/*</div>*/}
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
