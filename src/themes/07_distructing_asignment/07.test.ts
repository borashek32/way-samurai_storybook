import {ManType} from "./ManComponent";

let props: ManType

beforeEach(() => {
   props = {
    name: "nat",
    age: 34,
    lessons: [
      {title: "1"},
      {title: "2"},
      {title: "3"}
    ],
    address: {
      street: {
        title: "Barbaros av"
      }
    }
  }
})

test("", () => {
  // const age = man.age
  // const lessons = man.lessons

  // создаем две переменные с такими же названиямми, как и у свойств объекта
  // можно сделать псевдонимы через двоеточие
  const {age: a, lessons: l} = props
  const title = props.address.street.title

  expect(a).toBe(34)
  expect(l.length).toBe(2)
  expect(title).toBe("Barbaros av")
})

test("", () => {
  const l1 = props.lessons[0]
  const l2 = props.lessons[1]

  // деструктуризация массива
  // делают так, если точно знают состав массива
  // в обычных массивах такое не актуально,
  // потому что мы не знаем состав массивов
  const [ls1, ls2] = props.lessons

  expect(l1.title).toBe("1")
  expect(l2.title).toBe("2")
})