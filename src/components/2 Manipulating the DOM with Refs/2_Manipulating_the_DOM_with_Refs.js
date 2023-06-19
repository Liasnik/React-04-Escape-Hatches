import { useState } from 'react'
import CatFriends from './CatFriends'
import FocusWithRef from './FocusWithRef'
import styles from './ref-DOM.module.css'

export default function ManipulatingTheDOMwithRefs() {
  const [dark, setDark] = useState(true)

  let style
  let styleButton
  let buttonText
  if (dark) {
    buttonText = 'Light'
    styleButton = styles.buttonLight
    style = styles.containerDark
  } else {
    buttonText = 'Dark'
    styleButton = styles.buttonDark
    style = styles.container
  }

  function hendleDark() {
    setDark(!dark)
  }

  return (
    <div className={style}>
      <div className={styles.title}>
        <h1>
          2. Manipulating the DOM with Refs (Управление DOM с помощью ссылок)
        </h1>
        <button className={styleButton} onClick={hendleDark}>
          {buttonText}
        </button>
      </div>
      <div className={styles.firstBlock}>
        <FocusWithRef />
        <CatFriends />
      </div>
    </div>
  )
}
