import styles from './my-style.module.css'
import { useRef, useState } from 'react'

export default function ClickedCounter() {
  const [count, setCount] = useState(0)
  let ref = useRef(0)

  function handleClick() {
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }

  function handleClick2() {
    setCount(count + 1)
  }

  return (
    <div className={styles.clickedCounter}>
      <div style={{ float: 'left', marginBottom: '30px' }}>
        <div style={{ display: 'flex', marginBottom: '30px' }}>
          <div style={{ width: '45%' }}>
            <p style={{ float: 'left', color: 'GrayText' }}>
              Click Counter <i>(useRef)</i>{' '}
            </p>
            <div className={styles.counterFild}>{ref.current}</div>
            <button onClick={handleClick}>
              Click <i>useRef</i>
            </button>
            <button onClick={() => (ref.current = 0)}>Clear</button>
          </div>

          <div className={styles.code} style={{ marginTop: 0 }}>
            <code>{code}</code>
          </div>
        </div>

        <div style={{ display: 'flex', marginBottom: '30px' }}>
          <div style={{ width: '100%' }}>
            <p style={{ float: 'left', color: 'GrayText' }}>
              Click Counter <i>(useState)</i>
            </p>
            <div className={styles.counterFild}>{count}</div>
            <button onClick={handleClick2}>
              <i>
                Click <i>useState</i>
              </i>
            </button>
            <button onClick={() => setCount(0)}>Clear</button>
          </div>
          <div style={{ width: '130%' }}>
            <p style={{ float: 'left', color: 'GrayText' }}>
              И только после нажатия кнопки <i>Click useState</i> запустится
              re-render и появится счёт в поле Click Counter <i>(useRef)</i>{' '}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p style={{ color: 'green', marginTop: '30px' }}>
          {' '}
          От сюда следует - если значение <b>count</b> нужно отображать на
          экране, то имеет смысл использовать для него <b>значение состояния</b>
          . Когда значение счетчика установлено с помощью
          <b> setCount()</b>, React повторно отображает компонент, и экран
          обновляется, чтобы отразить новый счетчик. Если вы попытаетесь
          реализовать это с помощью <b>ref</b>, React никогда не будет повторно
          отображать компонент, поэтому вы никогда не увидите изменения
          счетчика! Ну если сильно захотим то увидим конечно, как в этом
          примере... Но всё-же...
        </p>
      </div>
    </div>
  )
}

const code = `function handleClick() {
  // This doesn't re-render the component!
  countRef.current = countRef.current + 1;
}`
