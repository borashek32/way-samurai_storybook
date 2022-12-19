import {CityType, GovernmentalBuildingsType} from "../02_types/02_02";

export const destroyHouses = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street);
}

export const countStaff = (buildings: Array<GovernmentalBuildingsType>, number: number) => {
    return buildings.filter(building => building.staffCount > number);
}