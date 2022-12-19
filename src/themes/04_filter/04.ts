const age = [5, 8, 34, 37, 100, 15, 67];

const oldAges = 100;

const predicate = (age: number) => age > oldAges;


type CourceType = {
    title: string,
    price: number
}
const courses = [
    {title: "Sass", price: 200},
    {title: "Css", price: 100},
    {title: "js", price: 500},
    {title: "php", price: 300}
];

export const cheapPredicate = (course: CourceType) => {
    return course.price < 160;
}