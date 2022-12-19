import {CityType} from "../02_types/02_02";
import {countStaff, destroyHouses} from "./04_02";

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
                            title: "Ataturk av."
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
                            title: "Ataturk av."
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
                            title: "Barbaros av."
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

test("houses at Ataturk st should be destroyed", () => {
    destroyHouses(city, "Ataturk av.");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].address.street.title).toBe("Barbaros av.")
});

test("count staff greater then 150", () => {
    let buildings = countStaff(city.governmentBuildings, 150);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("HOSPITAL");
});