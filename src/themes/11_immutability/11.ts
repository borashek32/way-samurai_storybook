import userEvent from "@testing-library/user-event";

export type UserType = {
  id: number
  name: string
  hair: number
  address: {
    title: string
    house: number
  }
}
export type ComputerType = {
  title: string
}
export type UserWithComputerType = UserType & {
  computer: ComputerType
}
export type UserWithBooksType = UserType & {
  books: Array<string>
}
export type WithCompanies = {
  companies: Array<CompanyType>
}
export type CompanyType = {
  id: number
  title: string
}

export const makeHairstyle = (u: UserType, num: number) => {
  // const uCopy = {...u} // делаем копию
  // uCopy.hair = u.hair / num

  // тоже самое деструктуризация
  // делаем крпию ... и перезаписываем нужное свойство
  return {...u, hair: u.hair / num}
}
export const changeAddress = (u: UserWithComputerType, newTitle: string) => {
  return {...u, address: {...u.address, title: newTitle}}
}
export const upgradeUserComputer = (u: UserWithComputerType, newComputer: string) => {
  return {
    ...u,
    computer: {
      ...u.computer,
      title: newComputer
    }
  }
}
export const changeAddressToOtherHouse = (u: UserWithComputerType & UserWithBooksType, newHouse: number) => {
  return {
    ...u,
    address: {
      ...u.address,
      house: newHouse
    }
  }
}
export const addNewBooks = (u: UserWithComputerType & UserWithBooksType, newBook: string) => {
  return {
    ...u,
    books: [...u.books, newBook]
  }
}
export const changeBook = (u: UserWithComputerType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => {
  return {
    ...u,
    // books: u.books.map((b) => {
    //   if (b === oldBook) {
    //     return newBook
    //   } else {
    //     return b
    //   }
    // })
    // тоже самое, что и сверху
    books: u.books.map(b => b === oldBook ? newBook : b)
  }
}
export const updateSkills = (skills: Array<number>, oldSkillValue: number, newSkillValue: number) => {
  return skills.map(s => s === oldSkillValue ? newSkillValue : s);
}
export const removeBook = (u: UserWithComputerType & UserWithBooksType, book: string) => {
  return {
    ...u,
    books: u.books.filter(b => b !== book)
  }
}
export const updateCompany = (user: WithCompanies,
                              id: number,
                              newTitle: string) => {
  return {
    ...user,
    companies: user.companies.map(c => c.id === id ? {...c, title: newTitle} : c.title)
  }
}
export const updateCompaniesTitle = (companies: { [key: string]: Array<CompanyType> },
                                     userId: number,
                                     companyId: number,
                                     companyTitle: string) => {
  const companyCopy = {...companies}
  companyCopy[userId] = companyCopy[userId].map(c => c.id === companyId ? {...c, title: companyTitle} : c)

  return companyCopy
}









