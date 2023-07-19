
import { DummyInput } from "../DummyInput"
import { TaskActiveInputs } from "../Tasks/TaskActiveInputs"

/**
 * Representing all inputs inside of modal
 * @function
 * @param {Object} group containing memberships of all users
 * @param {(Object) => void} onTaskChange callback changing atributes of task
 * @param {Object} task current value of task
 * @returns {JSX.Element} inputs inside of modal
 */
export const GroupTaskInputs = ({group, onTaskChange, task}) => {
    return (
        <div>
            <div style={{flex: 1, backgroundColor: 'lightblue'}}>
                <DummyInput info="název skupiny" defVal={group.name}/>
            </div>
            <TaskActiveInputs onTaskChange={onTaskChange} task={task}/>
        </div>
    )
}