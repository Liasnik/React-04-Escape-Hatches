import { useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import styles from '../ref-DOM.module.css'
import '../CatSlider.css'

export default function CatFriends() {
  const [index, setIndex] = useState(0)
  const ref = useRef(null)

  return (
    <div className={styles.catsContainer}>
      <nav>
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            ref.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            })
          }}
        >
          Next
        </button>
      </nav>
      <div className={styles.divCats}>
        <ul className={styles.ul}>
          {catList.map((cat, i) => (
            <li
              className={styles.li}
              key={cat.id}
              ref={index === i ? ref : null}
            >
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const catList = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  })
}
