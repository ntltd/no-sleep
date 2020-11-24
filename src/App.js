import React, { useEffect, useMemo } from 'react'
import NoSleep from './noSleep'

import logo from './logo.svg'
import './App.css'

function App() {
  const noSleep = useMemo(() => new NoSleep(), [])
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }
    document.addEventListener('click', function enableNoSleep() {
      document.removeEventListener('click', enableNoSleep, false)
      noSleep.enable()
    }, false)
  }, [noSleep])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Simple <code>NoSleep.js</code> &times; <code>React</code> example.
        </p>
        <a
          className="App-link"
          href="https://github.com/richtr/NoSleep.js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NoSleep.js
        </a>
      </header>
    </div>
  )
}

export default App
