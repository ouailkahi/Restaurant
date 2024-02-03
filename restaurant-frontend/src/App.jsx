import { useState } from 'react'
import Topbar from './component/Topbar'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <Navbar/>
    </>
  )
}

export default App
