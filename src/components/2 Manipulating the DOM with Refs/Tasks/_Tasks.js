import CatFriends from './CatFriendsTask'
import styles from '../ref-DOM.module.css'
import VideoPlayer from './Play_video'
import SearchButton from './SearchButton'

export default function Tasks({ onClick }) {
  return (
    <div className={styles.tasks}>
      <h1>Задачи</h1>
      <h3>1. Воспроизвести и приостановить видео</h3>
      <p>{text1}</p>
      <p>
        Для дополнительной задачи синхронизируйте кнопку «Воспроизвести» с
        воспроизведением видео, даже если пользователь щелкает видео правой
        кнопкой мыши и воспроизводит его с помощью встроенных элементов
        управления мультимедиа в браузере. Вы могли бы хотеть слушать onPlayи
        onPauseна видео, чтобы сделать это.
      </p>
      <a href="https://codesandbox.io/s/9vqoym?file=%2FApp.js&utm_medium=sandpack">
        Codesandbox задача
      </a>
      <VideoPlayer />
      <a
        href="https://codesandbox.io/s/j42s0w?file=/App.js&utm_medium=sandpack"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <br />
        Codesandbox решение
      </a>
      <h3>2. Сфокусируйте поле поиска</h3>
      <a href="https://codesandbox.io/s/qrnur0?file=%2FApp.js&utm_medium=sandpack">
        Codesandbox задача
      </a>
      <p>
        <a href="https://codesandbox.io/s/zv288m?file=%2FApp.js&utm_medium=sandpack">
          Codesandbox решение
        </a>
      </p>
      <h3>3. Прокрутка карусели изображений</h3>
      <a href="https://codesandbox.io/s/nublxc?file=/App.js&utm_medium=sandpack">
        Codesandbox задача
      </a>
      <CatFriends />
      <a href="https://codesandbox.io/s/ddffoy?file=/App.js&utm_medium=sandpack">
        Codesandbox решение
      </a>
      <div>
        <h3>4. Установите фокус в поле поиска на отдельных компонентах</h3>
        <a href="https://codesandbox.io/s/jf1zc1?file=%2FApp.js&utm_medium=sandpack">
          Codesandbox задача
        </a>
        <p>
          Сделайте так, чтобы нажатие кнопки «Поиск» переводило фокус в поле.
          Обратите внимание, что каждый компонент определен в отдельном файле и
          не должен быть перемещен из него. Как вы соединяете их вместе?
        </p>
        <SearchButton onClick={onClick} />
        <p>{text}</p>
        <p>
          Эта кнопка уствнавливает focus в input вверху страницы с помощью ref.
          Это поле ввода получает доступ к этой ссылке с помощью forwardRef API.{' '}
        </p>
        <a href="https://codesandbox.io/s/mhxlfn?file=%2FApp.js&utm_medium=sandpack">
          Codesandbox решение
        </a>
      </div>
    </div>
  )
}

const text = `Решение:
 Вам нужно будет добавить onClick prop в SearchButton, и передать SearchButton в браузер <button>. Вы также передадите ссылку в <SearchInput>, которая перенаправит ее в реальную <input> и заполнит. Наконец, в обработчике кликов вы вызовете focus узел DOM, хранящийся внутри этой ссылки.`

const text1 = `В этом примере кнопка переключает переменную состояния для переключения между воспроизведением и состоянием паузы. Однако для фактического воспроизведения или приостановки видео одного состояния переключения недостаточно. Вам также необходимо вызвать play()и pause()элемент DOM для файла <video>. Добавьте к нему ссылку и заставьте кнопку работать.`
