import s from "./CustomSelect.module.css";

type CustomSelectType = {
  value?: string
  onChange: () => void
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

  return (
    <div className={s.select}>
      <div>{selectedItem && selectedItem.title}</div>
      <div className={s.items}>
        {props.items.map(item => <div key={item.value}>{item.title}</div>)}
      </div>
    </div>
  )
}