import {CityType, HousesType} from "../type/types";
export let town: CityType = {
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

export function createMessages(t: CityType) {
  let callbackFn = (h: HousesType) => {`hello, guys from the street ${h.address.street.title}`}
  return t.houses.map(h => callbackFn(h))
}
createMessages(town)
