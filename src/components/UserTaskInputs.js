import { TaskActiveInputs } from "./Tasks/TaskActiveInputs";
import { UserDummyInput } from "./Tasks/UserDummyInput";

export const UserTaskInputs = ({user, setTask, task}) => {
  return (
    <div>
        <UserDummyInput user={user}/>
        <TaskActiveInputs setTask={setTask} task={task}/>
    </div> 
  );
}
