import { useState } from 'react'

export function NewTodoForm(props) {
  // Uses states to update the fields and add dynamicity rather than static
  const [newItem, setNewItem] = useState("")

  // Doesn't refresh
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    props.onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className='form-row'>
        <label htmlFor='item'>Enter Item Name_</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id='item'
        />
      </div>
      <button className='btn'>Add to list!</button>
    </form>
  )
}