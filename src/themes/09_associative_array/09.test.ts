import {UsersType, UserType} from './09'

let user: UserType

beforeEach(() => {
  user = {
    name: 'Nataly',
    age: 34,
    address: {
      city: {
        title: 'Alanya'
      }
    }
  }
  user.address.city['citizensCount'] = 100
  user.address.city.citizensCount = 300
  user['children'] = 2

  // users = ['polina', 'igor', ]
})

test('user name should be Nataly', () => {
  expect(user.name).toBe('Nataly')
  // object is an associative array, so we can call its properties this way
  expect(user["name"]).toBe('Nataly')
})
test('user city should be Alanya', () => {
  expect(user.address.city.title).toBe('Alanya')
  expect(user['address']['city']['title']).toBe('Alanya')
  expect(user.address.city.title === user['address']['city']['title']).toBeTruthy()
})
test('user has a family', () => {
  expect(user.address.city.citizensCount).toBeTruthy()
  expect(user.address.city.citizensCount).toBe(300)
})
test('user has 2 children', () => {
  expect(user['children']).toBe(2)
  expect(user['children'] === user.children).toBeTruthy()
})