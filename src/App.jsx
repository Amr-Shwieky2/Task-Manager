import React, { useState } from 'react'
import { data } from './Context/TaskContext'
import TaskList from './Components/TaskList'

function App() {
  const[list, setList] = useState([])

  return (
    <div>
      <data.Provider value={{ list, setList }}>
        <TaskList/>
      </data.Provider>
    </div>
  )
}

export default App