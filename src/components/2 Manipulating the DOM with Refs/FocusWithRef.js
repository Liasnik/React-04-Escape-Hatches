import { useRef } from 'react'
import styles from './ref-DOM.module.css'

export default function FocusWithRef() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <div className={styles.focusContainer}>
      <input ref={inputRef} style={{ margin: '0 auto' }} />
      <button onClick={handleClick}>focus to input</button>
      <div className={styles.code}>
        <code>{code}</code>
      </div>
    </div>
  )
}

const code = `import { useRef } from 'react'

export default function FocusWithRef() {
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
