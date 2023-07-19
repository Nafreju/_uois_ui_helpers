
import { DummyInput } from "../DummyInput"
import { TaskActiveInputs } from "../Tasks/TaskActiveInputs"
/**
 *Representing all inputs inside of modal
 * @function
 * @param {string} group
 * @param {(Object)=>void} onTaskChange
 * @param {string} task
 * @returns {JSX.Element} - The rendered component
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