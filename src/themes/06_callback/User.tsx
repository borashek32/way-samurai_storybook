import React from 'react';

export const User = () => {
  const deleteUser = () => {
    alert("user is deleted")
  }
  const saveUser = () => {
    alert("user is saved")
  }
  const changeText = () => {
    console.log("change")
  }
  const focusLost = () => {
    console.log("focus lost")
  }
  // так мы не контролируем, когда вызовется событие
  // deleteUser()

  return (
    <div>
      <textarea onChange={changeText} onBlur={focusLost} />
      <input type="text"/>
      <div onClick={deleteUser}>delete</div>
      <div onClick={saveUser}>save</div>
    </div>
  )
}

// const callback = () => {
//   alert('124')
// }
// window.setTimeout(callback, 1000) // то же самое, что и addEventListener