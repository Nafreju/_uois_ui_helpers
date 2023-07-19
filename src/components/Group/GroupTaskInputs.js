
import { DummyInput } from "../DummyInput"
import { TaskActiveInputs } from "../Tasks/TaskActiveInputs"
/**
 * 
 * @param {string} group
 * @param {} setTask
 * @param {string} task
 * @returns 
 */
export const GroupTaskInputs = ({group, setTask, task}) => {
    return (
        <div>
            <div style={{flex: 1, backgroundColor: 'lightblue'}}>
                <DummyInput name="název skupiny" userName={group.name}/>
            </div>
            <TaskActiveInputs setTask={setTask} task={task}/>
        </div>
    )
}