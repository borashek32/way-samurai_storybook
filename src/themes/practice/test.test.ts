import {DepartmentType, PetShopType} from './state'
import {
    getPetName,
    getPetsQuantityForSale,
    makeAllPetsForSale,
    changePetShopName,
    addNemDepartmentIntoShop,
    getCatFood,
    getPriceOfTheCheapestCatFood,
    getTotalFoodPrice,
    getAllClothesNames,
    getAllPetNames,
    addNewPet
} from "./functions"

let shop: PetShopType;

beforeEach(() => {
    shop = {
        id: 1,
        name: "Alanya pet's shop",
        address: {id: 1, country: "Turkey", town: "Alanya", street: "Barbaros av.", house: 5, floor: 1},
        pets: [
            {id: 1, name: "Masha", kind: "cat", breed: "Siamese", forSale: true},
            {id: 2, name: "Pasha", kind: "cat", breed: "Simple", forSale: true},
            {id: 3, name: "Igor", kind: "cat", breed: "Bold", forSale: false},
            {id: 4, name: "Polina", kind: "cat", breed: "Simple", forSale: false},
            {id: 5, name: "John", kind: "dog", breed: "Dalmatian", forSale: true},
            {id: 6, name: "Jerry", kind: "dog", breed: "Toy Terrier", forSale: true},
            {id: 7, name: "Kate", kind: "dog", breed: "Bulldog", forSale: true},
            {id: 8, name: "Mike", kind: "dog", breed: "Sharpei", forSale: false}
        ],
        departments: [
            {
                id: 1,
                title: "Food",
                content: [
                    {id: 1, name: "Kitty Kat", kind: "cat", price: 20},
                    {id: 2, name: "Kitty", kind: "cat", price: 40},
                    {id: 3, name: "Pedigree", kind: "dog", price: 30}
                ]
            },
            {
                id: 2,
                title: "Medicine",
                content: [
                    {id: 1, name: "For heart", kind: "heart", price: 40},
                    {id: 2, name: "For legs", kind: "legs", price: 50},
                    {id: 3, name: "For stomach", kind: "stomach", price: 40},
                    {id: 4, name: "For eyes", kind: "eyes", price: 90}
                ]
            },
            {
                id: 3,
                title: "Clothes",
                content: [
                    {id: 1, name: "Hat", kind: "wool", price: 40},
                    {id: 2, name: "Sweater", kind: "wool", price: 50},
                    {id: 3, name: "Trousers", kind: "wool", price: 40},
                    {id: 4, name: "Boots", kind: "wool", price: 90}
                ]
            }
        ]
    }
})

test("pets quantity for sale should be 4", () => {
    expect(getPetsQuantityForSale(shop)).toBe(5);
});
test("name of the second pet should be Pasha", () => {
    expect(getPetName(shop.pets[1])).toBe("Pasha");
});
test("quantity of pets for sale should be 8", () => {
    expect(makeAllPetsForSale(shop.pets).length).toBe(8);
});
test("name of the shop should be changed into The best Alanya pets shop", () => {
    expect(changePetShopName(shop)).toBe("The best Alanya pets shop");
});
test("should add a new department into pet shop", () => {
    let department: DepartmentType = {
        id: 4,
        title: "Ammunition",
        content: [
            {id: 5, name: "For legs", kind: "legs", price: 60},
            {id: 6, name: "For head", kind: "head", price: 70}
        ]
    }
    addNemDepartmentIntoShop(shop, department);
    expect(shop.departments.length).toBe(3);
});
test("should get cat food", () => {
    expect(getCatFood(shop)).toBe(2);
});
test("should the price of the cheapest cat food", () => {
    expect(getPriceOfTheCheapestCatFood(shop)).toBe(20)
});
test("should get the total price of all food", () => {
    expect(getTotalFoodPrice(shop)).toBe(90);
});
test("should get all names of pet clothes", () => {
    expect(getAllClothesNames(shop)).toStrictEqual([
        "Hat",
        "Sweater",
        "Trousers",
        "Boots"
    ]);
});
test("should get all names of the pets", () => {
    expect(getAllPetNames(shop)).toStrictEqual([
        "Masha",
        "Pasha",
        "Igor",
        "Polina",
        "John",
        "Jerry",
        "Kate",
        "Mike"
    ]);
});
test("should add a new pet into shop", () => {
    let newPet = {
        id: 9,
        name: "Ken",
        kind: "mouse",
        breed: "without tail",
        forSale: true
    }
    expect(addNewPet(shop, newPet)).toBe(9);
});