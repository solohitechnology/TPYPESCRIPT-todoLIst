import React from 'react'
import { ITask } from '../interfaces';

interface props {
    task: ITask;
    completeTask(tasknameDelete: string): void
}
const TodoTask = ({task, completeTask}: props) => {
  return <div className='task'>
    <div className="content">
        <span> {task.taskName} </span>
        <span> {task.deadline} </span>
        </div> 
        <button onClick={() =>completeTask(task.taskName)}>X</button>

  </div>
  
};

export {}
export default TodoTask
