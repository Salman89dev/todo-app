import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CrudComponent from './CrudComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CrudComponent/>
    </>
  )
}

export default App
