import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Component/todoTask';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setdealine] = useState<number>(0)
  const [todoList, settodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setdealine(Number(event.target.value))
    };
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    settodoList([...todoList, newTask])
    setTask('')
    setdealine(0)
  }

  const completeTask = (taskNameDelete: string): void => {
    settodoList(todoList.filter((task) => {
      return task.taskName !== taskNameDelete 
    }))
  }
  return (
    <div className="App">
      <div className="solo">SOLOHITECH</div>
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder='Task...' name='task' value={task} onChange={handleChange} />
          <input
            type="text"
            name='deadline'
            value={deadline}
            placeholder='Deadline (in Days)...'
            onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
