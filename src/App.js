import React, { useMemo, useState, useCallback } from 'react'
import NoSleep from './noSleep'

import logo from './logo.svg'
import './App.css'

function App() {
  const noSleep = useMemo(() => new NoSleep(), [])
  const [enable, setEnable] = useState(false)
  const enableNoSleep = useCallback(() => {
    noSleep.enable()
    setEnable(true)
  }, [noSleep])
  const disableNoSleep = useCallback(() => {
    noSleep.disable()
    setEnable(false)
  }, [noSleep])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <button
          className={`App-button App-button--${enable ? 'enabled' : 'disabled'}`}
          onClick={enable ? disableNoSleep : enableNoSleep}
        >
          {enable ? 'enabled' : 'disabled'}
        </button>
        <p>
          Simple <code>NoSleep.js</code> &times; <code>React</code> example.
        </p>
        <a
          className="App-link"
          href="https://github.com/richtr/NoSleep.js/blob/master/example/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          NoSleep.js example
        </a>
      </header>
    </div>
  )
}

export default App
