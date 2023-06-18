
import { TaskDummyInput } from "./Tasks/TaskDummyInput"
import { TaskActiveInputs } from "./Tasks/TaskActiveInputs"

export const GroupTaskInputs = ({group, setTask, task}) => {

    return (
        <div>
          <div style={{flex: 1, backgroundColor: 'lightblue'}}>
              <TaskDummyInput name="název skupiny" userName={group.name}/>
          </div>
        <TaskActiveInputs setTask={setTask} task={task}/>
        </div>
    )
}