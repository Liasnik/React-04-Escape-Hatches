import styles from './my-style.module.css'

export default function StopWatchDescr() {
  return (
    <div>
      <p>
        При нажатии кнопки «Стоп» нужно отменить существующий интервал, чтобы он
        перестал обновлять переменную <b>now</b> состояния. Вы можете сделать
        это, вызвав <b>clearInterval</b>, но вам нужно дать ему идентификатор
        интервала, который ранее возвращался вызовом, <b>setInterval</b> когда
        пользователь нажимал Start. Вам нужно где-то хранить идентификатор
        интервала. Поскольку идентификатор интервала не используется для
        рендеринга, вы можете сохранить его в ссылке:
      </p>
      <div className={styles.code}>
        <code>{code}</code>
      </div>
    </div>
  )
}

const code = `export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)
  
    function handleStart() {
      setStartTime(Date.now())
      setNow(Date.now())
  
      clearInterval(intervalRef. current)
      intervalRef.current = setInterval(() => {
        setNow(Date.now())
      }, 10)
    }
  
    function handleStop() {
      clearInterval(intervalRef. current)
    }

    let secondsPassed = 0
    if (startTime != null && now != null) {
      secondsPassed = (now - startTime) / 1000
    }
    return (...
  `
