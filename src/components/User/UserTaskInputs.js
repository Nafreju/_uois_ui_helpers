import { TaskActiveInputs } from "../Tasks/TaskActiveInputs";
import { UserDummyInput } from "./UserDummyInput";

/**
 * Representing all inputs for defining task inside of modal 
 * @param {Object} props.user user to be shown whose task is beeing created
 * @param {()=> void} props.onTaskChange callback changing atributes of task
 * @param {Object} props.task task which atributes are beeing changed
 * @returns {JSX.Element} inputs passive and active to change atributes of task
 */
export const UserTaskInputs = ({user, onTaskChange, task}) => {
    return (
        <div>
            <UserDummyInput user={user}/>
            <TaskActiveInputs onTaskChange={onTaskChange} task={task}/>
        </div> 
    )
}
