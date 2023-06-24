import { forwardRef, useState } from 'react'
import styles from './ref-DOM.module.css'

export const AnotherComponentsNodes = forwardRef(() => {
  const [show, setShow] = useState(false)

  function hendleShow() {
    setShow(!show)
  }

  return (
    <div className={styles.anotherComponentDOM}>
      <h2>Доступ к узлам DOM другого компонента</h2>
      <p>
        {' '}
        По умолчанию React не позволяет компоненту получить доступ к узлам DOM
        других компонентов. Даже для собственных детей! Это сделано намеренно.
        Рефы — это спасательный люк, который следует использовать с
        осторожностью. Манипулирование узлами DOM другого компонента вручную
        делает ваш код еще более хрупким.
      </p>
      <p>
        Вот такой вариант:{' '}
        <code className={styles.codeText}>{textMyInput}</code> не пройдёт.
      </p>
      <p>
        Вместо этого компоненты, которые хотят выставить свои узлы DOM, должны
        согласиться на такое поведение. Компонент может указать, что он
        «пересылает» свою ссылку одному из своих дочерних элементов. Вот как
        MyInput можно использовать forwardRefAPI:
      </p>
      <div className={styles.code}>
        <code>{codeMyInput}</code>
      </div>
      <h3>Вот как это работает:</h3>
      <ol>
        <li>
          <code className={styles.codeText}>{textMyInput}</code> говорит React
          поместить соответствующий узел DOM в{' '}
          <code className={styles.codeText}>inputRef.current</code> . Однако это
          зависит от MyInput компонента — по умолчанию он этого не делает.
        </li>
        <li>
          {' '}
          Компонент <code className={styles.codeText}>MyInput</code> объявлен с
          использованием <code className={styles.codeText}>forwardRef</code>.
          Это позволяет получить inputRef сверху в качестве второго refаргумента
          , объявленного после <code className={styles.codeText}>props</code>.
        </li>
        <li>
          <code className={styles.codeText}>MyInput</code> сам передает
          полученный <code className={styles.codeText}>ref</code> внутрь себя в{' '}
          <code className={styles.codeText}>{inputText}</code>.
        </li>
      </ol>
      <button onClick={hendleShow}>
        {!show ? 'Посмотреть весь код' : 'Скрыть код'}
      </button>
      {show && (
        <div className={styles.code}>
          <code>{forwardRefCode}</code>
        </div>
      )}
      <p>
        В дизайн-системах для низкоуровневых компонентов, таких как кнопки,
        элементы ввода и т. д., является распространенным шаблоном
        перенаправление своих ссылок на свои узлы DOM. С другой стороны,
        компоненты высокого уровня, такие как формы, списки или разделы страниц,
        обычно не раскрывают свои узлы DOM, чтобы избежать случайных
        зависимостей от структуры DOM.
      </p>
    </div>
  )
})

const textMyInput = `<MyInput ref={inputRef} />`
const codeMyInput = `const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
  });`

const inputText = `<input>`

const forwardRefCode = `import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}`
