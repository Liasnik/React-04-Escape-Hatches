import { useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import styles from './ref-DOM.module.css'

export default function TodoListWithFlushSync() {
  const listRef = useRef(null)
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(initialTodos)

  function handleAdd() {
    const newTodo = { id: nextId++, text: text }
    flushSync(() => {
      setText('')
      setTodos([...todos, newTodo])
    })
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  return (
    <div className={styles.todoBlock}>
      <p>
        Чтобы решить эту проблему, вы можете заставить React синхронно обновлять
        («сбрасывать») DOM. Для этого импортируйте flushSyncи react-domоберните
        обновление состояния в flushSyncвызов:
      </p>
      <div className={styles.code}>
        <code>{code}</code>
      </div>
      <p>
        Это заставит React синхронно обновлять DOM сразу после
        flushSyncвыполнения кода, заключенного в него. В результате последняя
        задача уже будет в DOM к моменту, когда вы попытаетесь прокрутить ее.
      </p>

      <div className={styles.todo}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ul ref={listRef}>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

let nextId = 0
let initialTodos = []
for (let i = 0; i < 10; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1),
  })
}

const code = `flushSync(() => {
    setTodos([ ...todos, newTodo]);
  });
  listRef.current.lastChild. scrollIntoView();`
