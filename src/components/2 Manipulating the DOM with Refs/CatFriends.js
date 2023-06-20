import { useRef } from 'react'
import styles from './ref-DOM.module.css'

export default function CatFriends() {
  const itemsRef = useRef(null)

  function scrollToId(itemId) {
    const map = getMap()
    const node = map.get(itemId)
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }

  return (
    <div className={styles.catsContainer}>
      <Text />
      <nav>
        <button onClick={() => scrollToId(2)}>Tom</button>
        <button onClick={() => scrollToId(6)}>Jelly&Lorum</button>
        <button onClick={() => scrollToId(9)}>Maru</button>
        <button onClick={() => scrollToId(13)}>Вася</button>
        <button onClick={() => scrollToId(15)}>Мурзик</button>
      </nav>
      <div className={styles.div}>
        <ul className={styles.ul}>
          {catList.map((cat) => (
            <li
              className={styles.li}
              key={cat.id}
              ref={(node) => {
                const map = getMap()
                if (node) {
                  map.set(cat.id, node)
                } else {
                  map.delete(cat.id)
                }
              }}
            >
              <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a
          href="https://codesandbox.io/s/1dwe75?file=/App.js&utm_medium=sandpack"
          target="_blank"
          rel="noreferrer"
          title='target="_blank" with rel="noreferrer"'
        >
          Open code in CodeSandbox
        </a>
        <div className={styles.code}>
          <code>{code}</code>
        </div>
      </div>
    </div>
  )
}

const catList = []
for (let i = 0; i < 20; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  })
}

const code = `function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  // Или если без Map то просто:
  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

`
function Text() {
  return (
    <div className={styles.intro}>
      <h2>Пример: прокрутка до элемента</h2>
      <div className={styles.code}>
        <code>{code2}</code>
      </div>
    </div>
  )
}

const code2 = `// You can use any browser APIs, for example:
myRef.current.scrollIntoView();`
