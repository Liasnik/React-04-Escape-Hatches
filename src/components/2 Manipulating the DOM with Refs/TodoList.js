import { useState, useRef } from 'react'
import styles from './ref-DOM.module.css'

export default function TodoList() {
  const listRef = useRef(null)
  const [text, setText] = useState('')
  const [todos, setTodos] = useState(initialTodos)

  function handleAdd() {
    const newTodo = { id: nextId++, text: text }
    setText('')
    setTodos([...todos, newTodo])
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  // redundant function. For example.

  //   useEffect(() => {
  //     let refCarrent = listRef.current

  //     function handleWheel(event) {
  //       refCarrent.scrollBy({
  //         top: event.deltaY,
  //         behavior: 'smooth',
  //       })
  //     }
  //     refCarrent.addEventListener('wheel', handleWheel)
  //     return () => {
  //       refCarrent.removeEventListener('wheel', handleWheel)
  //     }
  //   }, [])

  return (
    <div className={styles.todoBlock}>
      <p>
        При добавлении новой задачи не доматывается до неё внизу, а
        останавлавается на предпоследнем пункте списка!
      </p>
      <p>
        В React{' '}
        <a
          href="https://react.dev/learn/queueing-a-series-of-state-updates"
          target="_blank"
          rel="noreferrer"
        >
          обновления состояния ставятся в очередь
        </a>{' '}
        . Обычно это то, что вы хотите. Однако здесь это вызывает проблему,
        потому что setTodosне сразу обновляет DOM. Таким образом, когда вы
        прокручиваете список до последнего элемента, задача еще не добавлена.
        Вот почему прокрутка всегда «отстает» на один элемент.
      </p>
      <p>Проблема заключается в этих двух строках:</p>
      <div className={styles.code}>
        <code>{code}</code>
      </div>

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

const code = `setTodos([ ...todos, newTodo]);
listRef.current.lastChild. scrollIntoView();`
