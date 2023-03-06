import React, {useMemo, useState} from "react";

export default {
  title: "React memo demo 2"
}

// const NewMessagesCounter = (props: { count: number }) => {
//   return (
//     <div>{props.count}</div>
//   )
// }
const booksSecret = (props: { books: Array<string>, addBook: () => void }) => {
  console.log('books')
  return (
    <div>
      <button onClick={() => props.addBook()}>add book</button>
      <div>{props.books.map((b, i) => <div key={i}>{b}</div>)}</div>
    </div>
  )
}

const Users = React.memo(booksSecret) // returns a component in a container

export const LikeUseCallback = () => {
  console.log('ex')
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['react', 'js', 'css', 'html'])

  const newArray = useMemo(() => {

    const newBooks = books.filter(u => u.toLowerCase().indexOf("a") > -1)
    return newBooks

  }, [books])

  const addBook = () => {
    setBooks([...books, 'angular' + new Date().getTime()])
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Users books={newArray} addBook={addBook}/>

    </>
  )
}