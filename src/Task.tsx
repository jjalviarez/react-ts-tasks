import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTrash} from '@fortawesome/free-solid-svg-icons';



export interface iTask {
  name: string;
  done: boolean;
} 

interface Props {
  task:iTask,
  doneTask: (i:number) => void,
  deleteTask:(i:number) => void,
  index:number
} 


//const  Task = (props: {task:iTask, doneTask: (i:number) => void, deleteTask:(i:number) => void, index:number}):JSX.Element => {
//const  Task = (props: Props):JSX.Element => {
const  Task: React.FC<Props> = (props) => {  
  const task:iTask = props.task;
  const index:number = props.index;
    return (
      <div className="card card-body mt 2">
        <h2
          style={{textDecoration: task.done ? 'line-through' : '' }}
        >
          {task.name} 
        </h2> 
        <div className="modal-footer" role="group">

          <button 
            type="button" 
            className="btn btn-success"
            onClick={ () => props.doneTask(index)}
          >
            <FontAwesomeIcon  icon={task.done? faTimesCircle : faCheckCircle }    />
          </button>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={ () => props.deleteTask(index)}
          >
            <FontAwesomeIcon icon={faTrash}  />
          </button>
        </div>     


      </div>
    );
}

export default Task;
