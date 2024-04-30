import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';   {/* i file css vengono importati come fossero javascript*/}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   {/*  React fragment: ogni componenti jsx ha bisogno di UN componente padre, 
              questo <> permette di aavere un unico componente padre (che poi non verrà renderizzato) */}
      <h1>Hello, world!</h1>
    </>
  )
}

export default App
