import { useState, useRef } from 'react'
import styles from '../my-style.module.css'

export default function ChatFixed() {
  const [text, setText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [show, setShow] = useState(false)
  const [showPromt, setShowPromt] = useState(false)
  let timeoutID = useRef(null)

  function handleSend() {
    setIsSending(true)
    timeoutID.current = setTimeout(() => {
      alert('Sent! ' + text)
      setIsSending(false)
    }, 2000)
  }

  function handleUndo() {
    setIsSending(false)
    clearTimeout(timeoutID.current)
  }

  let colorButton = show ? { color: 'blue' } : { color: 'red' }

  function handleShow() {
    setShow(!show)
  }

  function handleShowPromt() {
    setShowPromt(!showPromt)
  }

  return (
    <>
      <h3 style={{ color: 'green' }}>Правильный вариант</h3>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && <button onClick={handleUndo}>Cancel</button>}

      <div>
        <button onClick={handleShowPromt}>
          {!showPromt ? 'Показать подсказку' : 'Скрыть подсказку'}
        </button>
      </div>
      {showPromt && (
        <p>
          Обычные переменные типа let timeoutID не «выживают» между повторными
          рендерингами, потому что каждый рендер запускает ваш компонент (и
          инициализирует его переменные) с нуля. Следует ли хранить
          идентификатор тайм-аута в другом месте?
        </p>
      )}
      <div className={styles.code} style={{ width: '98%' }}>
        <div>
          <button
            onClick={handleShow}
            // style={!show ? { color: 'red' } : { color: 'blue' }}
            style={colorButton}
          >
            {!show ? 'Показать решение' : 'Скрыть решение'}
          </button>
        </div>
        <div
          style={{ color: 'black', fontSize: 'medium', marginBottom: '30px' }}
        >
          {show && (
            <p>
              Всякий раз, когда ваш компонент перерисовывается (например, когда
              вы устанавливаете состояние), все локальные переменные
              инициализируются с нуля. Вот почему вы не можете сохранить
              идентификатор тайм-аута в локальной переменной, например,
              timeoutIDа затем ожидать, что другой обработчик событий «увидит»
              его в будущем. Вместо этого сохраните его в ссылке, которую React
              сохранит между рендерингами.
            </p>
          )}
        </div>
        {show && <code>{code}</code>}
      </div>
    </>
  )
}

const code = `import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = 
  useState(false);
  let timeoutID = useRef(null)

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert('Sent! ' + text);
      setIsSending(false);
    }, 2000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e =>   
        setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
         Cancel
        </button>
      }
    </>
  );
}`
