import { TaskActiveInputs } from "../Tasks/TaskActiveInputs";
import { UserDummyInput } from "./UserDummyInput";
/**
 * Representing all inputs inside of modal 
 * @param {string} user
 * @param {()=> void}onTaskChange
 * @param {string} task
 * @returns {JSX.Element} The rendered component.
 */
export const UserTaskInputs = ({user, onTaskChange, task}) => {
  return (
    <div>
        <UserDummyInput user={user}/>
        <TaskActiveInputs onTaskChange={onTaskChange} task={task}/>
    </div> 
  );
}
