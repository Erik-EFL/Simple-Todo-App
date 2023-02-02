import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import supabase from '../utils/supabase'
import NewTodo from '../components/NewTodo'

export default function Home() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const { data } = await supabase.from('todos').select('*')
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className={styles.container}>
      <NewTodo reload={fetchTodos} />
      {todos.map((todo) => (
        <p className={styles.todos} key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}
