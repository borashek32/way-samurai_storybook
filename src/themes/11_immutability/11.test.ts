import {
  addNewBooks,
  changeAddress, changeAddressToOtherHouse, changeBook,
  makeHairstyle, removeBook, updateCompaniesTitle, updateCompany,
  updateSkills, upgradeUserComputer,
  UserType, UserWithBooksType,
  UserWithComputerType, WithCompanies
} from "./11";

// чистая функция ничего не меняет в объекте
test("reference type test", () => {
  let user: UserType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 4
    }
  }
  const awesomeUser = makeHairstyle(user, 2)

  expect(awesomeUser.hair).toBe(5)
  expect(user.hair).toBe(10)
  expect(user.address === awesomeUser.address).toBeTruthy()
  expect(user !== awesomeUser).toBeTruthy()
})
// поверхностная копия - копируются примитивы и делается ссылка на объект

test("change address test", () => {
  let user: UserWithComputerType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 8
    },
    computer: {
      title: "Apple"
    }
  }
  const movedUser = changeAddress(user, "Moscow")

  expect(movedUser).not.toBe(user)
  expect(user.address).not.toBe(movedUser.address)
  expect(movedUser.address.title).toBe("Moscow")
  expect(user.computer).toBe(movedUser.computer)
})

test("upgrade user computer test", () => {
  let user: UserWithComputerType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 3
    },
    computer: {
      title: "Asus"
    }
  }
  const upgradedUser = upgradeUserComputer(user, "Apple")

  expect(upgradedUser).not.toBe(user)
  expect(user.address).toBe(upgradedUser.address)
  expect(upgradedUser.computer.title).toBe("Apple")
  expect(user.computer).not.toBe(upgradedUser.computer)
  expect(user.computer.title).toBe("Asus")
})

test("user should change house test", () => {
  let user: UserWithComputerType & UserWithBooksType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 6
    },
    computer: {
      title: "Asus"
    },
    books: ["css", "html", "react", "js"]
  }
  const movedUser = changeAddressToOtherHouse(user, 3)

  expect(user).not.toBe(movedUser)
  expect(movedUser.address.house).toBe(3)
  expect(user.address.house).toBe(6)
  expect(user.books).toBe(movedUser.books)
  expect(movedUser.computer).toBe(user.computer)
  expect(user.computer).toBe(movedUser.computer)
})

test("add new books test", () => {
  let user: UserWithComputerType & UserWithBooksType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 6
    },
    computer: {
      title: "Asus"
    },
    books: ["css", "html", "react", "js"]
  }
  const userWithBooks = addNewBooks(user, "ts")

  expect(userWithBooks).not.toBe(user)
  expect(userWithBooks.books[4]).toBe("ts")
  expect(userWithBooks.books).not.toBe(user.books)
  expect(user.books.length).toBe(4)
})

test("user should change a book test", () => {
  let user: UserWithComputerType & UserWithBooksType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 6
    },
    computer: {
      title: "Asus"
    },
    books: ["css", "html", "react", "js"]
  }
  const userWithNewBook = changeBook(user, "js", "ts")

  expect(userWithNewBook.books[3]).toBe("ts")
  expect(userWithNewBook).not.toBe(user)
  expect(userWithNewBook.computer).toBe(user.computer)
  expect(userWithNewBook.books).not.toBe(user.books)
  expect(userWithNewBook.address).toBe(user.address)
})

test("update skill test", () => {
  const skills: Array<number> = [12, 34, 56, 78]

  const updatedSkills = updateSkills(skills, 34, 90)

  expect(updatedSkills[1]).toBe(90)
})

test("user should remove a book test", () => {
  let user: UserWithComputerType & UserWithBooksType = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 6
    },
    computer: {
      title: "Asus"
    },
    books: ["css", "html", "react", "js"]
  }
  const userWithoutBook = removeBook(user, "js")

  expect(userWithoutBook).not.toBe(user)
  expect(userWithoutBook.computer).toBe(user.computer)
  expect(userWithoutBook.books).not.toBe(user.books)
  expect(userWithoutBook.address).toBe(user.address)
  expect(userWithoutBook.books.length).toBe(3)
})

test("update user companies", () => {
  let user: UserWithComputerType & WithCompanies = {
    id: 1,
    name: "Igor",
    hair: 10,
    address: {
      title: "Alanya",
      house: 6
    },
    computer: {
      title: "Asus"
    },
    companies: [
      {id: 1, title: "Epam"},
      {id: 2, title: "Q"}
    ]
  }
  const userCopy = updateCompany(user, 1, "EPAM") as unknown as UserWithComputerType & WithCompanies

  expect(user).not.toBe(userCopy)
  expect(userCopy.companies[0].title).toBe("EPAM")
  expect(user.companies).not.toBe(userCopy.companies)
  expect(user.address).toBe(userCopy.address)
})

test("update user companies title", () => {
  let companies = {
    1: [
      {id: 1, title: "Epam"},
      {id: 2, title: "Q"}
    ],
    2: [
      {id: 1, title: "Labirint"},
      {id: 2, title: "Euro"}
    ]
  }
  const copy = updateCompaniesTitle(companies, 1, 1, "epam")

  expect(copy[1]).not.toBe(companies[1])
  expect(copy[2]).toBe(companies[2])
  expect(copy[1][0].title).toBe("epam")
})
















