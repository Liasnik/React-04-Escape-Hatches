import React, { useRef, useState } from 'react'
import './CatSlider.css' // Подключаем файл стилей

const CatSlider = () => {
  const sliderRef = useRef(null)
  const [currentCat, setCurrentCat] = useState(1)

  const handleNext = () => {
    setCurrentCat((prevCat) =>
      prevCat + 1 === catList.length ? 0 : prevCat + 1
    )
  }

  const handlePrevious = () => {
    setCurrentCat((prevCat) =>
      prevCat === 0 ? catList.length - 1 : prevCat - 1
    )
  }

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        <div
          className="slides"
          style={{ transform: `translateX(-${currentCat * 33.33}%)` }}
        >
          {catList.map((cat, index) => {
            let slideClassName = 'slide'
            if (index === currentCat - 1) {
              slideClassName += ' previous'
            } else if (index === currentCat) {
              slideClassName += ' active'
            } else if (index === currentCat + 1) {
              slideClassName += ' next'
            }

            return (
              <div key={cat.id} className={slideClassName}>
                <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <button onClick={handlePrevious} style={{ float: 'left' }}>
          Previous
        </button>
        <button onClick={handleNext} style={{ float: 'right' }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default CatSlider

const catList = []
for (let i = 1; i < 17; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  })
}
