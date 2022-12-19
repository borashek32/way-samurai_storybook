import {useState} from "react";

export type ManType = {
  name: string
  age: number
  // lessons: LessonType
  lessons: Array<{ title: string }>
  address: { // является объектом, у которого есть улица
    street: { // является объектом, у которого есть название
      title: string // и наконец само название улицы - это строка
    }
  }
}

type PropsType = {
  title: string
  man: ManType
  food: Array<string>
  car: {
    model: string
  }
}

function useMyState(m: string) {
  return [m, function() {}]
}
function useMyState1(m: string) {
  return {
    message: "m",
    setMessage: function() {}
  }
}
// мы выделили два свойства отдельно - это man и title, а остальные запихнули в объект пропс
export const ManComponent: React.FC<PropsType> = ({man, title, ...props}) => {
// при такой деструктуризации нельзя использовать название пропс еще раз, потому что оно занято
// и все оставшиеся свойства запихиваем в объект рест или restProps
// export const ManComponent: React.FC<PropsType> = (props) => {
//   const {man, title, ...rest} = props
  // const {title, man: {name}} = props
  // const {title, man} = props
  const {message, setMessage} = useMyState1("hello")
  return <div>
    {/*<h1>{props.man.name}</h1>*/}
    <h1>{man.name}</h1>
    <hr/>
    <h3>{title}</h3>
    {/*<h3>{man.name}</h3>*/}
    <p>{props.car.model}</p>
  </div>
}