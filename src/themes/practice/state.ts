export type PetShopType = {
    id: number,
    name: string
    address: AddressType
    pets: Array<PetType>
    departments: Array<DepartmentType>
}

export type AddressType = {
    id: number,
    country: string
    town: string
    street: string
    house: number
    floor: number
}

export type PetType = {
    id: number,
    name: string
    kind: string
    breed: string
    forSale: boolean
}

export type DepartmentType = {
    id: number,
    title: string,
    content: Array<DepartmentContentType>
}

export type DepartmentContentType = {
    id: number,
    name: string,
    price: number,
    kind: string
}