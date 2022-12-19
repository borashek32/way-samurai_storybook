export type ManType = {
    name: string,
    age: number
}

export const ppl: Array<ManType> = [
    {name: "Igor Zuev", age: 5},
    {name: "Vadim Zuev", age: 37},
    {name: 'Nat Zueva', age: 34},
    {name: "Polina Zueva", age: 8}
]

// ppl проходят ItIncubator и становятся devs
// длинная запись
// const ItIncubator = (man: ManType) => {
//     return {
//         stack: ["JS", "React", "HTML", "CSS", "TS"],
//         firstname: man.name.split(" ")[0],
//         lastname: man.name.split(" ")[1]
//     }
// }

// принятая записть, если функция ничего не делает, а только возвращает что-то
const ItIncubator = (man: ManType) => ({
    stack: ["JS", "React", "HTML", "CSS", "TS"],
    firstname: man.name.split(" ")[0],
    lastname: man.name.split(" ")[1]
})  // круглые скобки говорят о том, что возвращаем объект

// массивы полученные в результате работы функции ItIncubator
// 1 вариант
const devs1 = [
    {firstname: "Igor", stack: ["JS", "React", "HTML", "CSS", "TS"], lastname: "Zuev", age: 5},
    {firstname: "Vadim", stack: ["JS", "React", "HTML", "CSS", "TS"], lastname: "Zuev", age: 37},
    {firstname: 'Nat', stack: ["JS", "React", "HTML", "CSS", "TS"], lastname: "Zueva", age: 34},
    {firstname: "Polina", stack: ["JS", "React", "HTML", "CSS", "TS"], lastname: "Zueva", age: 8}
]
// 2 вариант
const devs2 = [
    ItIncubator(ppl[0]),
    ItIncubator(ppl[1]),
    ItIncubator(ppl[2])
]
// 3 вариант
const devs3 = ppl.map(man => ItIncubator(man));
// 4 вариант
const dev4 = ppl.map(man => ({
    stack: ["JS", "React", "HTML", "CSS", "TS"],
    firstname: man.name.split(" ")[0],
    lastname: man.name.split(" ")[1]
}))

// получить массив приветствий каждого студента ItIncubator
// export const greeting = (man: ManType) => `Hello, our great student, ${man.name.split(" ")[0]}!`
//
// const message = ppl.map(man => greeting(man));

const messages = ppl.map(man => `Hello, our great student, ${man.name.split(" ")[0]}!`);


