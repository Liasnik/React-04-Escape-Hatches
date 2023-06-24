import styles from './ref-DOM.module.css'

export const SyncWithFlushSync = () => {
  return (
    <div className={styles.flushSync}>
      <h2>
        Состояние обновляется синхронно с помощью{' '}
        <code className={styles.codeText}>flushSync</code>
      </h2>
      <p>
        {' '}
        React можнo заставить синхронно обновлять («сбрасывать») DOM. Для этого
        импортируйте flushSync из react-dom и оберните обновление состояния в
        вызов <code className={styles.codeText}>flushSync</code> :
      </p>
      <div className={styles.code}>
        <code>{codeflushSync}</code>
      </div>
    </div>
  )
}

const codeflushSync = `flushSync(() => {
    setTodos([ ...todos, newTodo]);
  });
  listRef.current.lastChild. scrollIntoView();`
