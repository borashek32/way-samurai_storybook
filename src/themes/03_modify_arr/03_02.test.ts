import {CityType} from '../02_types/02_02'
import {addMoneyToBudget, createMessage, increaseFireStaff, repairHouse} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "NY",
        houses:
            [
                {
                    id: 1,
                    builtAt: 2000,
                    repaired: false,
                    address: {
                        number: 1,
                        street: {
                            title: "Ataturk av,"
                        }
                    }
                },
                {
                    id: 2,
                    builtAt: 2002,
                    repaired: false,
                    address: {
                        number: 1,
                        street: {
                            title: "Ataturk av,"
                        }
                    }
                },
                {
                    id: 3,
                    builtAt: 2003,
                    repaired: false,
                    address: {
                        number: 1,
                        street: {
                            title: "Ataturk av,"
                        }
                    }
                }
            ],
        governmentBuildings: [
            {
                id: 1,
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 4,
                    street: {
                        title: "Central str."
                    }
                }
            },
            {
                id: 2,
                type: "FIRE STATION",
                budget: 300000,
                staffCount: 100,
                address: {
                    number: 5,
                    street: {
                        title: "Central str."
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
});

test("budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 400000);

    expect(city.governmentBuildings[0].budget).toBe(600000);
});

test("budget should be changed for FIRE STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], 500000);

    expect(city.governmentBuildings[1].budget).toBe(800000);
});

test("house should be repaired", () => {
    repairHouse(city.houses[0]);

    expect(city.houses[0].repaired).toBeTruthy();
});

test("fire staff should be increased", () => {
    increaseFireStaff(city.governmentBuildings[1], 20);

    expect(city.governmentBuildings[1].staffCount).toBe(120);
});

test("gritting should be correct", () => {
    const message = createMessage(city);

    expect(message).toBe(`Hello NY. I want you to be happy, all 100000`);

    // expect(createMessage(city)).toBe(`Hello NY. I want you to be happy, all 100000`);
});