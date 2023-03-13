import React, {useMemo, useState} from "react";

export default {
  title: "React memo demo"
}

const NewMessagesCounter = (props: { count: number }) => {
  return (
    <div>{props.count}</div>
  )
}
const UsersSecret = (props: { users: Array<string> }) => {
  console.log('users')
  return (
    <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
  )
}

const Users = React.memo(UsersSecret) // returns a component in a container

export const HelpsReactMemo = () => {
  console.log('ex')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Nat', 'Igor', 'Vadim', 'Polina'])

  const newArray = useMemo(() => {

    const newUsers = users.filter(u => u.toLowerCase().indexOf("a") > -1)
    return newUsers

  }, [users])

  const addUser = () => {
    setUsers([...users, 'Sveta' + new Date().getTime()])
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Users users={newArray}/>
      <button onClick={addUser}>add user</button>
    </>
  )
}