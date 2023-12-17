import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'

function App() {
  const [count, setCount] = useState(0)

  const getTasks = useQuery(api.tasks.getItemList)
  console.log(getTasks)
  const addItem = useMutation(api.tasks.addItem)
  const onCreate = () => {
    addItem({
      text: 'yaflanla yeminle'
    })
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onCreate}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
