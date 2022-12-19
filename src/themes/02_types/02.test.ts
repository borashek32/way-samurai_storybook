import {CityType} from './02_02'

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
                budget: 20000,
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
                budget: 30000,
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

test("city should contain 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2000);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.street.title).toBe("Ataturk av,");
    expect(city.houses[0].address.number).toBe(1);

    expect(city.houses[1].builtAt).toBe(2002);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.street.title).toBe("Ataturk av,");
    expect(city.houses[1].address.number).toBe(1);

    expect(city.houses[2].builtAt).toBe(2003);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.street.title).toBe("Ataturk av,");
    expect(city.houses[2].address.number).toBe(1);
});

test("city should contain  hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(20000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central str.");

    expect(city.governmentBuildings[1].type).toBe("FIRE STATION");
    expect(city.governmentBuildings[1].budget).toBe(30000);
    expect(city.governmentBuildings[1].staffCount).toBe(100);
    expect(city.governmentBuildings[1].address.street.title).toBe("Central str.");
});