import './App.css'
import ReferencingValuesWithRefs from './components/1 Referencing Values with Refs/1_Referencing_Values_with_Refs'
import ManipulatingTheDOMwithRefs from './components/2 Manipulating the DOM with Refs/2_Manipulating_the_DOM_with_Refs'
import { SynchronizingWithEffects } from './components/3_Synchronizing_with_Effects/3_Synchronizing_with_Effects'
import SearchInput from './components/SearchInput'
import Toolbar from './components/Toolbar'
import { useRef } from 'react'

function App() {
  const focusRef1 = useRef(null)
  const scrollRef2 = useRef(null)
  const scrollRef3 = useRef(null)
  const scrollRef4 = useRef(null)

  function hendleFocus_1() {
    focusRef1.current.focus()
  }

  function hendleScroll_2() {
    scrollRef2.current.scrollIntoView()
  }

  function hendleScroll_3() {
    scrollRef3.current.scrollIntoView()
  }

  function hendleScroll_4() {
    scrollRef4.current.scrollIntoView()
  }

  function hendleScroll_5() {
    scrollRef3.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  return (
    <div className="App">
      <div className="toolbar">
        <a className="link" href="https://react.dev/learn">
          Learn React
        </a>
        <Toolbar />
      </div>
      <div className="header">
        <h1 style={{ margin: 'auto' }}>4. Escape Hatches</h1>
        <ul style={{ listStyle: '' }}>
          <li className="li" onClick={hendleScroll_2}>
            Manipulating the DOM
          </li>

          <li className="li" onClick={hendleScroll_3}>
            Synchronizing with Effects
          </li>
          <li className="li" onClick={hendleScroll_4}>
            forward Ref((props, ref)
          </li>
        </ul>
        <SearchInput ref={focusRef1} />
      </div>
      <body>
        <ReferencingValuesWithRefs />
        <button onClick={hendleFocus_1}>Наверх</button>
        <div ref={scrollRef2}>
          <button onClick={hendleScroll_5}>Next</button>
          <ManipulatingTheDOMwithRefs onClick={hendleFocus_1} />
        </div>
      </body>
      <button onClick={hendleFocus_1}>Наверх</button>
      <div ref={scrollRef3}>
        <SynchronizingWithEffects ref={scrollRef4} />
      </div>
    </div>
  )
}

export default App
