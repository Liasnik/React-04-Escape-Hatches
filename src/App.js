import './App.css'
import ReferencingValuesWithRefs from './components/1 Referencing Values with Refs/1_Referencing_Values_with_Refs'
import ManipulatingTheDOMwithRefs from './components/2 Manipulating the DOM with Refs/2_Manipulating_the_DOM_with_Refs'
import SynchronizingWithEffects from './components/3_Synchronizing_with_Effects/3_Synchronizing_with_Effects'
import Toolbar from './components/Toolbar'
import { useRef } from 'react'

function App() {
  const focus_1 = useRef(null)
  const focus_2 = useRef(null)
  const focus_3 = useRef(null)

  function hendleFocus_1() {
    focus_1.current.focus({ preventScroll: false })
  }

  function hendleFocus_2() {
    focus_2.current.focus({ preventScroll: false })
  }

  function hendleFocus_3() {
    focus_3.current.focus({ preventScroll: false })
  }

  return (
    <div className="App">
      <div className="toolbar">
        <a className="link" href="https://react.dev/learn">
          Learn React
        </a>
        <Toolbar />
      </div>
      <header>
        <h1 style={{ margin: 'auto' }}>4. Escape Hatches</h1>
        <button ref={focus_1} onClick={hendleFocus_2}>
          Manipulating the DOM
        </button>
        <button onClick={hendleFocus_3}>Synchronizing with Effects</button>
      </header>
      <body>
        <ReferencingValuesWithRefs />
        <button ref={focus_2} onClick={hendleFocus_1}>
          Наверх
        </button>
        <ManipulatingTheDOMwithRefs />
      </body>
      <button ref={focus_3} onClick={hendleFocus_1}>
        Наверх
      </button>
      <SynchronizingWithEffects />
    </div>
  )
}

export default App
