import styles from './my-style.module.css'

export default function BestPracticesForRefs() {
  return (
    <div className={styles.bestPracticesForRefs}>
      <h1>Рекомендации для рефералов</h1>
      <h3>
        Следование этим принципам сделает ваши компоненты более предсказуемыми:
      </h3>
      <ul style={{ width: '95%', margin: '0 auto' }}>
        <li>
          Относитесь к рефералам как к аварийному люку. Ссылки полезны при
          работе с внешними системами или API-интерфейсами браузера. Если
          большая часть логики вашего приложения и потока данных зависит от
          ссылок, вы можете пересмотреть свой подход.
        </li>
        <li>
          Не читайте и не пишите <code className={styles.ct}>ref.current</code>{' '}
          во время рендеринга. Если во время рендеринга требуется некоторая
          информация, используйте вместо этого{' '}
          <a
            href="https://react.dev/learn/state-a-components-memory"
            target="__parent"
            title="Go to react.dev state-a-components-memory (target='__parent')"
          >
            состояние
          </a>
          . Поскольку React не знает, когда{' '}
          <code className={styles.ct}>ref.current</code> изменяется, даже
          считывание их во время рендеринга затрудняет прогнозирование поведения
          вашего компонента. (Единственным исключением является код <br />
          <code className={styles.ct}>
            if (!ref.current) ref.current = new Thing()
          </code>
          , который устанавливает ссылку только один раз во время первого
          рендеринга.)
        </li>
      </ul>
      <p>
        Ограничения состояния React не распространяются на ссылки. Например,
        состояние действует{' '}
        <a
          href="https://react.dev/learn/state-as-a-snapshot"
          target="_top"
          title="target='top'"
        >
          как снимок для каждого рендеринга
        </a>{' '}
        и{' '}
        <a
          href="https://react.dev/learn/queueing-a-series-of-state-updates"
          target="_self"
          title='target="_self"'
        >
          не обновляется синхронно
        </a>
        . Но когда вы изменяете текущее значение ref, оно немедленно меняется:
      </p>
      <div className={styles.code} style={{ marginTop: '20px' }}>
        <code>{code}</code>
      </div>
      <p>
        Это связано с тем, что сам ref является обычным объектом JavaScript и
        ведет себя как таковой.
      </p>
      <p>
        Вам также не нужно беспокоиться о том, чтобы избежать мутации при работе
        с ссылкой. Пока объект, который вы мутируете, не используется для
        рендеринга, React не волнует, что вы делаете с ссылкой или ее
        содержимым.
      </p>
      <h1 className={styles.colorRed}>Refs и DOM</h1>
      <p>
        Вы можете указать ссылку на любое значение. Однако наиболее
        распространенным вариантом использования ссылки является доступ к
        элементу DOM. Например, это удобно, если вы хотите сфокусировать ввод
        программно. Когда вы передаете ссылку на ref атрибут в JSX, например{' '}
        <b>
          <code>{code2}</code>
        </b>
        , React поместит соответствующий элемент DOM в myRef.current. Вы можете
        прочитать больше об этом в Манипулирование DOM с ссылками.
      </p>
      <h1>Резюме</h1>
      <ul>
        <li>
          Рефы — это спасательный люк для хранения значений, которые не
          используются для рендеринга. Вы не будете нуждаться в них часто.
        </li>
        <li>
          Ссылка — это простой объект JavaScript с одним свойством, называемым
          current, которое вы можете прочитать или установить.
        </li>
        <li>Вы можете попросить React дать вам ссылку, вызвав useRef Hook.</li>
        <li>
          Как и состояние, ссылки позволяют сохранять информацию между
          повторными рендерингами компонента.
        </li>
        <li>
          В отличие от состояния, установка значения ссылки current не вызывает
          повторную визуализацию.
        </li>
        <li>
          Не читайте и не пишите ref.current во время рендеринга. Это затрудняет
          прогнозирование вашего компонента.
        </li>
      </ul>
    </div>
  )
}

const code = `ref.current = 5;
console.log(ref.current); // 5`

const code2 = `<div ref={myRef}>`
