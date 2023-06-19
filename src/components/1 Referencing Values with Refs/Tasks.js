// import { useState, useRef } from 'react'
import Chat from './Tasks/ChatBroken'
import ChatFixed from './Tasks/ChatFixed'
import Dashboard from './Tasks/Dashboard'
import DashboardBroken from './Tasks/DashboardBroken'
import styles from './my-style.module.css'

export default function Tasks() {
  return (
    <div className={styles.tasks}>
      <h2>Попробуйте решить некоторые задачи</h2>
      <h3>1. Исправить неработающую кнопку «Отменить»</h3>
      <p>
        Введите сообщение и нажмите «Отправить». Вы заметите, что есть
        трехсекундная задержка, прежде чем вы увидите «Отправлено!» тревога. Во
        время этой задержки вы можете увидеть кнопку «Отменить». Нажмите на нее.
        Эта кнопка «Отменить» должна остановить «Отправлено!» сообщение от
        появления. Он делает это, вызывая clearTimeout идентификатор тайм-аута,
        сохраненный во время handleSend.{' '}
      </p>
      <p>
        Однако даже после нажатия кнопки «Отменить» сообщение «Отправлено!»
        сообщение все еще появляется. Найдите, почему это не работает, и
        исправьте это.
      </p>
      <h4>
        <a
          href="https://codesandbox.io/s/ukotpt?file=%2FApp.js&utm_medium=sandpack"
          target="__blanck"
          title="Open CodeSandbox"
        >
          Open CodeSandbox{' '}
        </a>
      </h4>
      <div className={styles.taskFildContainer}>
        <div className={styles.taskFild}>
          <Chat />
        </div>
        <div className={styles.taskFild}>
          <ChatFixed />
        </div>
      </div>
      <h3>2. Исправьте компонент, который не может повторно отобразиться</h3>
      <p>
        Эта кнопка предназначена для переключения между отображением «Вкл.» и
        «Выкл.». Однако он всегда показывает «Выкл.». Что не так с этим кодом?
        Почини это.
      </p>
      <h4>
        <a
          href="https://codesandbox.io/s/xdw8pn?file=/App.js&utm_medium=sandpack"
          target="__blanck"
          title="Open CodeSandbox"
        >
          Open CodeSandbox{' '}
        </a>
      </h4>
      <h3>3. Fix debouncing</h3>
      <p>
        В этом примере все обработчики нажатий кнопок{' '}
        <a href="https://redd.one/blog/debounce-vs-throttle" target="__blanck">
          «отключаются»(“debounced”)
        </a>
        . Чтобы узнать, что это значит, нажмите одну из кнопок. Обратите
        внимание, как сообщение появляется секундой позже. Если вы нажмете
        кнопку во время ожидания сообщения, таймер сбросится. Поэтому, если вы
        продолжаете быстро нажимать одну и ту же кнопку много раз, сообщение
        появится только через секунду после того, как вы перестанете нажимать.
        Debouncing позволяет вам отложить некоторые действия до тех пор, пока
        пользователь «не перестанет что-то делать».
      </p>
      <p>
        Этот пример работает, но не совсем так, как предполагалось. Кнопки не
        являются независимыми. Чтобы увидеть проблему, нажмите одну из кнопок, а
        затем сразу нажмите другую кнопку. Вы ожидаете, что после задержки вы
        увидите сообщения обеих кнопок. Но появляется только сообщение последней
        кнопки. Сообщение первой кнопки теряется.
      </p>
      <p>Почему кнопки мешают друг другу? Найдите и устраните проблему.</p>
      <h4>
        <a
          href="https://codesandbox.io/s/9ioy7q?file=/App.js&utm_medium=sandpack"
          target="__blanck"
          title="Open CodeSandbox"
        >
          Open CodeSandbox{' '}
        </a>
      </h4>
      <div className={styles.taskFildContainer}>
        <div className={styles.taskFild}>
          <DashboardBroken />
        </div>
        <div className={styles.taskFild}>
          <Dashboard />
        </div>
      </div>
      <h3>4. Прочитать последнее состояние</h3>
      <p>
        В этом примере после того, как вы нажмете «Отправить», появится
        небольшая задержка перед отображением сообщения. Введите «hello»,
        нажмите «Отправить», а затем снова быстро отредактируйте ввод. Несмотря
        на внесенные вами изменения, оповещение по-прежнему будет отображать
        «привет» (это значение состояния на момент нажатия кнопки).
      </p>
      <p>
        Обычно такое поведение является тем, что вам нужно в приложении. Однако
        могут быть случайные случаи, когда вам нужно, чтобы асинхронный код
        считывал последнюю версию некоторого состояния. Можете ли вы придумать
        способ, чтобы предупреждение отображало текущий введенный текст, а не
        то, что было во время щелчка?
      </p>
      <h4>
        <a
          href="https://codesandbox.io/s/g4ccr5?file=%2FApp.js&utm_medium=sandpack"
          target="__parent"
          title="Open CodeSandbox"
        >
          Open CodeSandbox{' '}
        </a>
      </h4>
      <hr />
      <h3>
        <a href="mailto:9426247@gmail.com" title="9426247@gmail.com">
          Email
        </a>
      </h3>
    </div>
  )
}
