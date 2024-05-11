import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const checker = [1,2,3,4,5]
  return (
    <div>
      <h2 className="mb-2">Listing Service</h2>
      <Form />
      <div className='grid grid-cols-4 gap-4'>
        {
          checker.map((item, i) =>(
            <Card price={20} desc={"Something"} title={"Title"}/>
          ))

        }
      </div>
      
    </div>
  )
}

export default App
