import { useState, useRef } from 'react'
import styles from '../my-style.module.css'

function DebouncedButton({ onClick, children }) {
  let timeoutID = useRef(null)

  return (
    <button
      onClick={() => {
        clearTimeout(timeoutID.current)
        timeoutID.current = setTimeout(() => {
          onClick()
        }, 1500)
      }}
    >
      {children}
    </button>
  )
}

function DashboardButton() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ color: 'green' }}>Правильный вариант</h3>
      <DebouncedButton onClick={() => alert('1 Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('2 Soup boiled!')}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('3 Lullaby sung!')}>
        Sing a lullaby
      </DebouncedButton>
    </div>
  )
}

export default function Dashboard() {
  const [show, setShow] = useState(false)
  const [showPromt, setShowPromt] = useState(false)

  function handleShow() {
    setShow(!show)
  }

  function handleShowPromt() {
    setShowPromt(!showPromt)
  }

  return (
    <div>
      <DashboardButton />
      <div>
        <button onClick={handleShowPromt}>
          {!showPromt ? 'Показать подсказку' : 'Скрыть подсказку'}
        </button>
      </div>
      {showPromt && (
        <p>
          Переменная идентификатора последнего тайм-аута является общей для всех
          DebouncedButton компонентов. Вот почему нажатие одной кнопки
          сбрасывает время ожидания другой кнопки. Можете ли вы сохранить
          отдельный идентификатор тайм-аута для каждой кнопки?
        </p>
      )}
      <div className={styles.code} style={{ width: '100%' }}>
        <div>
          <button
            onClick={handleShow}
            style={!show ? { color: 'red' } : { color: 'blue' }}
          >
            {!show ? 'Показать решение' : 'Скрыть решение'}
          </button>
        </div>
        <div
          style={{ color: 'black', fontSize: 'medium', marginBottom: '30px' }}
        >
          {show && (
            <p>
              Переменная like timeoutID является общей для всех компонентов. Вот
              почему нажатие на вторую кнопку сбрасывает время ожидания первой
              кнопки. Чтобы исправить это, вы можете сохранить тайм-аут в ref.
              Каждая кнопка получит свой реф, поэтому они не будут конфликтовать
              друг с другом. Обратите внимание, как быстрое нажатие двух кнопок
              покажет оба сообщения.
            </p>
          )}
        </div>
        {show && <code>{code}</code>}
      </div>
    </div>
  )
}

const code = `import { useRef } from 'react'

function DebouncedButton({ onClick, children }) {
  let timeoutID = useRef(null)

  return (
    <button onClick={() => {
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
        onClick();
      }, 1500);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('1 Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('2 Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('3 Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}`
