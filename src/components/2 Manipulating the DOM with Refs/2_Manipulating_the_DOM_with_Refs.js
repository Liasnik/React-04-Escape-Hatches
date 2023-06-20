import { useState } from 'react'
import CatFriends from './CatFriends'
import FocusWithRef from './FocusWithRef'
import styles from './ref-DOM.module.css'
import { AnotherComponentsNodes } from './Accessing_another_component’s'
import { SyncWithFlushSync } from './Synchronously_with_flushSync '

export default function ManipulatingTheDOMwithRefs() {
  const [dark, setDark] = useState(false)

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
      <hr />
      <div className="">
        <AnotherComponentsNodes />
        <SyncWithFlushSync />
      </div>
    </div>
  )
}
