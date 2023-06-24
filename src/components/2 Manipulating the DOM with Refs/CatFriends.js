import { useRef, useState } from 'react'
import styles from './ref-DOM.module.css'

export default function CatFriends() {
  const itemsRef = useRef(null)
  const [currentCat, setCurrentCat] = useState(0)

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

  function handleNext() {
    const totalCats = catList.length
    const nextCat = (currentCat + 1) % totalCats
    setCurrentCat(nextCat)
    scrollToId(nextCat)
  }

  function handlePrevious() {
    const totalCats = catList.length
    const previousCat = (currentCat - 1 + totalCats) % totalCats
    setCurrentCat(previousCat)
    scrollToId(previousCat)
  }

  return (
    <div className={styles.catsContainer}>
      <Text />
      <nav>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={() => scrollToId(2)}>Tom</button>
        <button onClick={() => scrollToId(6)}>Jelly&Lorum</button>
        <button onClick={() => scrollToId(9)}>Maru</button>
        <button onClick={() => scrollToId(13)}>Вася</button>
        <button onClick={() => scrollToId(15)}>Мурзик</button>
      </nav>
      <div className={styles.divCats}>
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
      <CatSlider />
      {/* <CatSlider2 /> */}
    </div>
  )
}

const catList = []
for (let i = 0; i < 16; i++) {
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

const CatSlider = () => {
  const [currentCat, setCurrentCat] = useState(0)

  // const handleNext = () => {
  //   setCurrentCat((prevCat) => (prevCat + 1) % catList.length)
  // }

  // const handlePrevious = () => {
  //   setCurrentCat((prevCat) => (prevCat - 1 + catList.length) % catList.length)
  // }

  const handleNext = () => {
    if (currentCat === catList.length - 1) {
      setCurrentCat(0)
    } else {
      setCurrentCat(currentCat + 1)
    }
  }

  const handlePrevious = () => {
    if (currentCat === 0) {
      setCurrentCat(catList.length - 1)
    } else {
      setCurrentCat(currentCat - 1)
    }
  }

  // const handleNext = () => {
  //   setCurrentCat(Math.min(currentCat + 1, catList.length - 1))
  // }

  // const handlePrevious = () => {
  //   setCurrentCat(Math.max(currentCat - 1, 0))
  // }

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img
        src={catList[currentCat].imageUrl}
        alt={'Cat #' + catList[currentCat].id}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

// const CatSlider2 = () => {
//   const sliderRef = useRef(null)
//   const [currentCat, setCurrentCat] = useState(1)

//   const handleNext = () => {
//     setCurrentCat((prevCat) =>
//       prevCat + 1 === catList.length ? 0 : prevCat + 1
//     )
//   }

//   const handlePrevious = () => {
//     setCurrentCat((prevCat) =>
//       prevCat === 0 ? catList.length - 1 : prevCat - 1
//     )
//   }

//   return (
//     <div className="slider" ref={sliderRef}>
//       <div className="slides">
//         {catList.map((cat, index) => {
//           let slideClassName = 'slide'
//           if (index === currentCat - 1) {
//             slideClassName += ' previous'
//           } else if (index === currentCat) {
//             slideClassName += ' active'
//           } else if (index === currentCat + 1) {
//             slideClassName += ' next'
//           }

//           return (
//             <div key={cat.id} className={slideClassName}>
//               <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
//             </div>
//           )
//         })}
//       </div>
//       <button onClick={handlePrevious}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   )
// }

// const CatSlider2 = () => {
//   const sliderRef = useRef(null)
//   const [sliderWidth, setSliderWidth] = useState(0)
//   const [currentCat, setCurrentCat] = useState(0)

//   useEffect(() => {
//     const handleResize = () => {
//       if (sliderRef.current) {
//         setSliderWidth(sliderRef.current.offsetWidth)
//       }
//     }

//     handleResize()
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   const handleNext = () => {
//     if (currentCat === catList.length - 1) {
//       setCurrentCat(0)
//     } else {
//       setCurrentCat(currentCat + 1)
//     }
//   }

//   const handlePrevious = () => {
//     if (currentCat === 0) {
//       setCurrentCat(catList.length - 1)
//     } else {
//       setCurrentCat(currentCat - 1)
//     }
//   }
//   return (
//     <div className="slider" ref={sliderRef}>
//       <div className="slides">
//         {catList.map((cat, index) => (
//           <div
//             key={cat.id}
//             className={`slide ${currentCat === index ? 'active' : ''}`}
//             style={{
//               transform: `translateX(-${currentCat * (sliderWidth / 3)}px)`,
//             }}
//           >
//             <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
//           </div>
//         ))}
//       </div>
//       <button onClick={handlePrevious}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   )
// }
