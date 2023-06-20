import styles from './my-style.module.css'
import './my-sass.scss'
import Table from './Table'
import Stopwatch from './StopWatch'
import StopWatchDescr from './StopWatchDescr'
import ClickedCounter from './clickedCounter'
import BestPracticesForRefs from './BestPracticesForRefs'
import Tasks from './Tasks'
import { useState } from 'react'

export default function ReferencingValuesWithRefs() {
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
      <div className="title">
        <h1>
          1. Referencing Values with Refs (Ссылка на значения c помощью ссылок)
          <button className={styleButton} onClick={hendleDark}>
            {buttonText}
          </button>
        </h1>
      </div>
      <div className={styles.blockflex}>
        <div className={styles.block}>
          <h2 style={{ color: 'green' }}>
            Когда использовать <b> refs </b> (ссылки)
          </h2>
          <br />
          <p>
            Если вы хотите, чтобы компонент «запоминал» некоторую информацию, но
            вы не хотите, чтобы эта информация запускала новые рендеры , вы
            можете использовать <b>ref .</b>
          </p>
          <br />
          <p>
            Как правило, <b>ref</b> используют, когда компоненту нужно «выйти за
            пределы» React и взаимодействовать с внешними API — часто API
            браузера, который не повлияет на внешний вид компонента.
          </p>
          <div className={styles.list}>
            <p>Вот несколько таких редких ситуаций:</p>
            <br />
            <ul>
              <li>
                Хранение{' '}
                <a href="https://developer.mozilla.org/docs/Web/API/setTimeout">
                  идентификаторов тайм-аута
                </a>
              </li>
              <li>
                Хранение{' '}
                <a href="https://developer.mozilla.org/docs/Web/API/Element">
                  элементов DOM
                </a>{' '}
                и управление ими
              </li>
              <li>
                Хранение других объектов, которые не нужны для расчета JSX.
              </li>
            </ul>
          </div>
          <p>
            Если вашему компоненту нужно хранить какое-то значение, но это не
            влияет на логику рендеринга, выберите <b>refs.</b>
          </p>
          <br />
          <h3>
            Ссылку на компонент можно добавить , импортировав useRef Hook из
            React.
            <p>
              Внутри вашего компонента вызовите useRef Hook и передайте
              начальное значение, на которое вы хотите ссылаться, в качестве
              единственного аргумента. Например, вот ссылка на значение 0:
            </p>
          </h3>
          <div className={styles.code}>
            <code>{code}</code>
          </div>
          <h3>useRef возвращает такой объект:</h3>
          <div className={styles.code}>
            <code>{code2}</code>
          </div>
        </div>
        <Table />
      </div>
      <div>
        <ClickedCounter />
        <div className={styles.stopWatchBlock}>
          <h2 style={{ color: 'green' }}>Пример: создание секундомера</h2>
          <Stopwatch />
          <StopWatchDescr />
        </div>
      </div>
      <BestPracticesForRefs />
      <Tasks />
    </div>
  )
}

const code = `const ref = useRef(0)'`
const code2 = `{ 
  current: 0 // The value you passed to useRef
}`
