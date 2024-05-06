import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchUsers from './FetchUsers'

function App() {


  return (
    <>
      <h1>Fetch Users and Post</h1>
      <div className='divider'>
        <FetchUsers/>
      </div>

    </>
  )
}

export default App
