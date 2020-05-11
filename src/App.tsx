import React, { useState, useRef } from "react";
import Task, {iTask} from './Task'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLElement>;


function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTask] = useState<iTask[]>([]);
  const taksInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    add(newTask);
    setNewTask("");
    taksInput.current?.focus();
  };

  const add = (name: string) => {
    setTask([...tasks, { name, done: false }]);
  };
  
const doneTask = (i:number):void => {
  const newTasts: iTask[] = [...tasks];
  newTasts[i].done = !newTasts[i].done;
  setTask(newTasts);
}

const deleteTask = (i:number):void => {
  const newTasts: iTask[] = [...tasks];
  newTasts.splice(i, 1);
  setTask(newTasts);
}

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={newTask}
                  autoFocus
                  ref={taksInput}
                />
                <input 
                  type="submit" 
                  disabled={!newTask.length} 
                  value="Send" 
                  className='btn btn-success btn-block mt-2'
                />
              </form>
            </div>
          </div>
          {tasks.map((task: iTask, index: number) => (
            <Task  
              task={task}
              doneTask={doneTask}
              deleteTask={deleteTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
