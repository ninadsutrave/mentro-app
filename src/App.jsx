import { useState } from 'react'
import Carousel from './components/Carousel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Carousel />
    </div>
  )
}

export default App
