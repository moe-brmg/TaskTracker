import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {
  const [showTask, setShowTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors apointment",
      day: "Feb 15th at 2:15pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "March 10th at 10:15am",
      reminder: true,
    },
  ])

  const addTask = (task) => {
    console.log(task)
    setTasks([...tasks, task])
  }

  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task
      }),
    )
  }
  const toggleShowTask = () => {
    setShowTask(!showTask)
  }

  return (
    <div className='container'>
      <Header showAdd={toggleShowTask} showTask={showTask} />
      {showTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder} />
      ) : (
        <p> No tasks to show</p>
      )}
    </div>
  )
}

export default App
