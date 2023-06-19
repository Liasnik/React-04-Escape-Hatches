import { useState } from 'react'
import styles from '../my-style.module.css'

export default function Chat() {
  const [text, setText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [show, setShow] = useState(false)
  let timeoutID = null

  function handleSend() {
    setIsSending(true)
    timeoutID = setTimeout(() => {
      alert('Sent!')
      setIsSending(false)
    }, 3000)
  }

  function handleUndo() {
    setIsSending(false)
    clearTimeout(timeoutID)
  }

  function handleShow() {
    setShow(!show)
  }

  return (
    <>
      <h3>Неправильно работает</h3>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && <button onClick={handleUndo}>Cancel</button>}

      <div className={styles.code} style={{ width: '100%' }}>
        <div>
          <button onClick={handleShow} style={{ color: 'blue' }}>
            {!show ? 'Показать код' : 'Скрыть код'}
          </button>
        </div>
        {show && <code>{code}</code>}
      </div>
    </>
  )
}

const code = `import { useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = 
  useState(false);
  let timeoutID = null;

  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
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
