export type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
};
type AddressType = {
    city: LocalCityType,
    street: string
};
type LocalCityType = {
    country: string,
    cityName: string
}
type TechnologiesType = {
    id: number,
    title: string
}

// присваиваем переменной student какой-то объект
export const student: StudentType = {
    name: "Nat",
    age: 34,
    isActive: false,
    address: {
        city: {
            country: "Turkey",
            cityName: "Alanya",
        },
        street: "260 sokak"
    },
    technologies: [
        {
            id: 1,
            title: "html"
        },
        {
            id: 2,
            title: "css"
        },
        {
            id: 3,
            title: "js"
        },
        {
            id: 4,
            title: "React"
        }
    ]
};