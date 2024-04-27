import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  
  return (
    <>
      <div>
      <h1>Counter App</h1>
      {/* Both Counters manage their state separately */}
      <Counter/>
      <Counter/>
      </div>
    </>
  )
}

export default App
