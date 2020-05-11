import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTrash} from '@fortawesome/free-solid-svg-icons';



export interface iTask {
  name: string;
  done: boolean;
} 

function Task(props: {task:iTask, doneTask: (i:number) => void, deleteTask:(i:number) => void, index:number}):JSX.Element {
  const task:iTask = props.task;
  const index:number = props.index;
    return (
      <div className="card card-body mt 2">
        <h2
          style={{textDecoration: task.done ? 'line-through' : '' }}
        >
          {task.name} <FontAwesomeIcon  icon={task.done? faTimesCircle : faCheckCircle }  onClick={ () => props.doneTask(index)}  /> 
          <FontAwesomeIcon icon={faTrash} onClick={ () => props.deleteTask(index)} />
        </h2>
      </div>
    );
}

export default Task;
