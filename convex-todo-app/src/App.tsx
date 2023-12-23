import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'
import { Item } from './components/item'
import { useState } from 'react'

function App() {

  const getTasks = useQuery(api.tasks.getItemList)
  console.log(getTasks?.reverse())
  const addItem = useMutation(api.tasks.addItem)
  const onCreate = (inputText: string) => {
    addItem({
      text: inputText,
      isCompleted:false
    })
  }

  const [inputValue ,setInputValue] = useState('')
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
        <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        <button onClick={()=>onCreate(inputValue)}>
          count is 
        </button>
        <div>
          
          {getTasks?.map(item=><Item id={item._id} text={item.text} isCompleted={item.isCompleted}/>)}
        </div>
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
