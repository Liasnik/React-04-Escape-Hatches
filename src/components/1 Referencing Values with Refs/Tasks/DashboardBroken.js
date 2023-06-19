import { useState } from 'react'
import styles from '../my-style.module.css'

let timeoutID

function DebouncedButton({ onClick, children }) {
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
          onClick()
        }, 1000)
      }}
    >
      {children}
    </button>
  )
}

export default function DashboardBroken() {
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(!show)
  }

  return (
    <div>
      <h3>Неправильно работает</h3>
      <DebouncedButton onClick={() => alert('Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>
        Sing a lullaby
      </DebouncedButton>

      <div className={styles.code} style={{ width: '100%' }}>
        <div>
          <button onClick={handleShow} style={{ color: 'blue' }}>
            {!show ? 'Показать код' : 'Скрыть код'}
          </button>
        </div>
        {show && <code>{code}</code>}
      </div>
    </div>
  )
}

const code = `let timeoutID;

function DebouncedButton({ onClick, children }) {
  return (
    <button onClick={() => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}`
