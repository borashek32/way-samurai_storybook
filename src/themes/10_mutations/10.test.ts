import {UserType} from "./10";

function increaseAge(u: UserType) {
  u.age++
}

test("reference type test", () => {
  const user = {
    name: "nat",
    age: 34,
    address: {
      title: "Msc"
    }
  }

  increaseAge(user)

  expect(user.age).toBe(35)

  const superman = user
  superman.age = 1000

  expect(user.age).toBe(1000)
})

test("array reference test", () => {
  const users = [
    {
      name: "nat",
      age: 34
    },
    {
      name: "vadim",
      age: 37
    }
  ]
  const admins = users
  admins.push({name: "polina", age: 9})

  expect(users.length).toBe(3)
})

test("value type test" , () => {
  const usersCount = 100

  let adminsCount = usersCount

  adminsCount++

  expect(adminsCount).toBe(101)
})

test("array reference1 test", () => {
  const user: UserType = {
    name: "nat",
    age: 34,
    address: {
      title: "Alanya"
    }
  }
  let addr = user.address.title
  const user2: UserType = {
    name: "vadim",
    age: 34,
    address: {
      title: addr
    }
  }
  // user2.address.title = "Kipr"

  expect(user.address).toBe(user2.address)
})