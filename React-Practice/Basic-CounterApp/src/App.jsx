import './App.css'
import Counter from './Counter'

function App() {
  
  return (
    <>
      <div>
      <h1>Counter App</h1>
      {/* Both Counters manage their state separately */}
      <Counter/>
      <h2>Counter 2</h2>
      <Counter/>
      </div>
    </>
  )
}

export default App
