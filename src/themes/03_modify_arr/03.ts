import {StudentType} from '../02_types/02';
import {CityType, GovernmentalBuildingsType, HousesType} from '../02_types/02_02'

// стрелочная запись функции
export const sum = (a: number, b: number) => {
    return a + b;
}
// обычная запись устаревшая
// export function sum(a: number, b: number) {
//     return a + b;
// }

const res = sum(sum(1, 2), sum(1, 4));
// стрелочная запись функции
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
}
// обычная запись устаревшая
// export function addSkill(student: StudentType, skill: string) {
//     student.technologies.push({
//         id: new Date().getTime(),
//         title: skill
//     });
// }
export const beActiveOrNot = (s: StudentType) => {
    if (s.isActive === true) {
        s.isActive = false;
    } else {
        s.isActive = true;
    }
    // вариант попроще
    // student.isActive = student.isActive !== true;
}

export const city = (s: StudentType, cityName: string) => {
    s.address.city.cityName = cityName;
}

export function addMoneyToBudget(building: GovernmentalBuildingsType, quantity: number) {
    building.budget += quantity;
}

export function repairHouse(house: HousesType) {
    house.repaired = true;
}

export const increaseFireStaff = (service: GovernmentalBuildingsType, quantity: number) => {
    service.staffCount += quantity;
}

export function createMessage(props: CityType) {
    return `Hello ${props.title}. I want you to be happy, all ${props.citizensNumber}`;
}