import React from 'react'

function Form() {
  return (
    <form className='form'>
        <input type="text" placeholder='Add a new task' />
        <button className='btn-add'>Add</button>
    </form>
  )
}

export default Form;