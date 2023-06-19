import './App.css'
import ReferencingValuesWithRefs from './components/1 Referencing Values with Refs/1_Referencing_Values_with_Refs'
import ManipulatingTheDOMwithRefs from './components/2 Manipulating the DOM with Refs/2_Manipulating_the_DOM_with_Refs'
import Toolbar from './components/Toolbar'

function App() {
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
      </header>
      <body>
        <ReferencingValuesWithRefs />
        <ManipulatingTheDOMwithRefs />
      </body>
    </div>
  )
}

export default App
