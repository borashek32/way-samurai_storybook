export type HousesType = {
  id: number
  builtAt: number,
  repaired: boolean,
  address: AddressType
};

export type AddressType = {
  number: number,
  street: StreetType
};

export type StreetType = {
  title: string
};

export type GovernmentalBuildingsType = {
  id: number,
  type: "HOSPITAL" | "FIRE STATION",
  budget: number,
  staffCount: number,
  address: AddressType
};

export type CityType = {
  title: string,
  houses: Array<HousesType>,
  governmentBuildings: Array<GovernmentalBuildingsType>,
  citizensNumber: number
};