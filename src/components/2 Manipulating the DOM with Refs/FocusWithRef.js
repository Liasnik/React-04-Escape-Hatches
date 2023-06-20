import { useRef } from 'react'
import styles from './ref-DOM.module.css'

export default function FocusWithRef() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <div className={styles.focusContainer}>
      <Text />
      <input ref={inputRef} style={{ margin: '0 auto' }} />
      <button onClick={handleClick}>focus to input</button>
      <div className={styles.code}>
        <code>{code}</code>
      </div>
    </div>
  )
}

const code = `import { useRef } from 'react'

function FocusWithRef() {
      const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        focus to input
</button>
    </>
  )
}`

function Text() {
  return (
    <div className={styles.intro}>
      <p>
        React автоматически обновляет
        <a href="https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction">
          {' '}
          DOM{' '}
        </a>
        в соответствии с выводом вашего рендеринга, поэтому вашим компонентам не
        нужно будет часто манипулировать им. Однако иногда вам может
        понадобиться доступ к элементам DOM, управляемым React, например, чтобы
        сфокусировать узел, прокрутить его или измерить его размер и положение.
        В React нет встроенного способа сделать это, поэтому вам понадобится
        ссылка на узел DOM.
      </p>
      <p>Oбъявляем ссылку </p>
      <div className={styles.code}>
        <code>{code2}</code>
      </div>
      <p>
        И передаём свою ссылку в качестве ref атрибута тегу JSX, для которого
        хотим получить узел DOM:
      </p>
      <div className={styles.code}>
        <code>{code3}</code>
      </div>
      <p>
        Хук useRef возвращает объект с одним свойством, называемым current.
        Изначально myRef.current будет null. Когда React создаст для этого
        DOM-узел {code4}, React поместит ссылку на этот узел в myRef.current.
        Затем вы можете получить доступ к этому узлу DOM из своих обработчиков
        событий и использовать определенные для него встроенные API-интерфейсы
        браузера .
      </p>
    </div>
  )
}
const code2 = `const myRef = useRef(null)`
const code3 = `<div ref={myRef}>`
const code4 = `<div>`
