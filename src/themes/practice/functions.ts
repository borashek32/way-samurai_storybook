import {DepartmentType, PetShopType, PetType} from "./state";

export const getPetsQuantityForSale = (shop: PetShopType) => {
    return shop.pets.filter(pet => pet.forSale).length;
}
export const getPetName = (pet: PetType) => {
    return pet.name;
}
export const makeAllPetsForSale = (pets: PetType[]) => {
    return pets.map(pet => pet.forSale = true);
}
export const changePetShopName = (petShop: PetShopType) => {
    return petShop.name = "The best Alanya pets shop";
}
export const addNemDepartmentIntoShop = (shop: PetShopType, department: DepartmentType) => {
    return shop.departments.push(department);
}
export const getCatFood = (petShop: PetShopType) => {
    let food = petShop.departments.filter(department => department.title === "Food")[0];
    return food.content.filter(cont => cont.kind === "cat").length;
}
export const getPriceOfTheCheapestCatFood = (shop: PetShopType) => {
    let food = shop.departments.filter(department => department.title === "Food")[0];
    let catFood = food.content.filter(cont => cont.kind === "cat");
    let price: number = 0;
    for (let i = 0; i < catFood.length; i++) {
        if (catFood[i].price > price) {
            return price = catFood[i].price;
        } else {
            return price;
        }
    }
}
export const getTotalFoodPrice = (shop: PetShopType) => {
    let food = shop.departments.filter(department => department.title === "Food")[0];
    let totalPrice = 0;
    for (let i = 0; i < food.content.length; i++) {
        totalPrice += food.content[i].price;
    }
    return totalPrice;
}
export const getAllClothesNames = (shop: PetShopType) => {
    let clothesDepartment = shop.departments.filter(dep => dep.title === "Clothes")[0];
    let clothesNames = [];
    for (let i = 0; i < clothesDepartment.content.length; i++) {
        clothesNames.push(clothesDepartment.content[i].name);
    }
    return clothesNames;
}
export const getAllPetNames = (shop: PetShopType) => {
    let petsNames = [];
    for (let i = 0; i < shop.pets.length; i++) {
        petsNames.push(shop.pets[i].name);
    }
    return petsNames;
}
export const addNewPet = (shop: PetShopType, newPet: PetType) => {
    return shop.pets.push(newPet);
}