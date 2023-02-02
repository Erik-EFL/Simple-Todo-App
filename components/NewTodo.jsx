import { useState } from 'react'
import supabase from '../utils/supabase'

const NewTodo = ({ reload }) => {
  const [title, setTitle] = useState('')

  const addTodo = async (e) => {
    e.preventDefault()
    await supabase.from('todos').insert({ title })
    reload()
    setTitle('')
  }

  return (
    <form onSubmit={addTodo}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </form>
  )
}

export default NewTodo
