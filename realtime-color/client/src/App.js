import { useEffect, useState } from 'react'
import "./App.css"
import { init, subscribe } from './socketApi'
import Palette from './components/Palette'

function App() {
  const [activeColor, setActiveColor] = useState("#4a4a4a")
  useEffect(() => {
    init()
    subscribe((color) => {
      setActiveColor(color)
    });
  }, [])

  return (
    <div className='App' style={{ backgroundColor: activeColor }}>
      <Palette activeColor={activeColor} />
    </div>
  )
}

export default App