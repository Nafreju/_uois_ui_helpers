import { TaskNameChange } from "./TaskNameChange";
import { TextAreaDelayed } from "components/TextAreaDelayed";
import { DateInputChange } from "./TaskDateChange";
import { formatDate } from "utils/DateUtils";
import { TaskDetailedDesChange } from "./TaskDetailedDesChange";
import { TaskReferenceChange } from "./TaskReferenceChange";
import { TaskDateChange } from "./TaskDateChange";
/**
 * Representing row of one task with components which are able to view and change its atributes.
 * @function
 * @param {string} task
 * @param {Object} actions
 * @param {string} index
 * @returns {JSX.Element} - The rendered component
 */
export const TaskRow = ({task, actions, index}) => {
    
    const dateEntryTD = formatDate(task.dateOfEntry)

    const briefDesServerChange = (value) => {
      //add mutation to change atribute
      actions.updateTask({...task, briefDes:value})
    }

    return (
      <tr>
        <th>{index + 1}</th>
        <td><TaskNameChange task={task} actions={actions}/></td>
        <td>{dateEntryTD}</td>
        <td><TaskDateChange task={task} actions={actions}/></td>
        <td> <TextAreaDelayed key={task.id} placeholder={task.briefDes} value={task.briefDes} onChange={briefDesServerChange}/></td>
        <td> <TaskDetailedDesChange task={task} actions={actions}/></td>
        <td> <a href={task?.reference}>{task?.reference}</a><TaskReferenceChange task={task} actions={actions}/></td>
      </tr>



    );
  };
  