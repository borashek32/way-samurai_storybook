import s from "./CustomSelect.module.css";
import {useState} from "react";

type CustomSelectType = {
  value?: string
  onChange: (value: string) => void
  items: ItemType[]
}
type ItemType = {
  value: string
  title: string
}

export const items: ItemType[] = [
  {value: '1', title: "one"},
  {value: '2', title: "two"},
  {value: '3', title: "three"},
  {value: '4', title: "four"},
  {value: '5', title: "five"},
]

export const CustomSelect = (props: CustomSelectType) => {

  const selectedItem = props.items.find(i => i.value === props.value)

  const [active, setActive] = useState(false)
  const showItems = () => setActive(!active)

  const itemClicked = (value: string) => {
    props.onChange(value)
    setActive(!active)
  }

  return (
    <div className={s.select}>
      <span
        className={s.main}
        onClick={showItems}
      >
        {selectedItem && selectedItem.title}
      </span>

      {active &&
        <div className={s.items}>
          {props.items.map(item => {
            return (
              <div
                onClick={() => itemClicked(item.value)}
                key={item.value}
              >
                {item.title}
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}