import { TaskNameChange } from "./TaskNameChange";
import { TextAreaDelayed } from "components/TextAreaDelayed";
import { DateInputChange } from "./TaskDateChange";
import { formatDate } from "utils/DateUtils";
import { TaskDetailedDesChange } from "./TaskDetailedDesChange";
import { TaskReferenceChange } from "./TaskReferenceChange";
import { TaskDateChange } from "./TaskDateChange";

export const TaskRow = ({task, actions, index}) => {
    const today = new Date().getTime();
    
    const dateEntryTD = formatDate(task.dateOfEntry)
    const dateSubmissionTD = formatDate(task.dateOfSubmission)
    let deadline_color = "red";
    if (today < new Date(dateSubmissionTD)) deadline_color = "green";

    const briefDesServerChange = (value) => {
      //add mutation to change atribute
      actions.updateTask({...task, briefDes:value})
    }

    return (
      <tr>
        <th>{index + 1}</th>
        <td><TaskNameChange task={task} actions={actions}/></td>
        <td>{dateEntryTD}</td>
        <td style={{color:deadline_color}}><TaskDateChange task={task} actions={actions}/></td>
        <td> <TextAreaDelayed key={task.id} placeholder={task.briefDes} value={task.briefDes} onChange={briefDesServerChange}/></td>
        <td> <TaskDetailedDesChange task={task} actions={actions}/></td>
        <td> <a href={task?.reference}>{task?.reference}</a><TaskReferenceChange task={task} actions={actions}/></td>
      </tr>



    );
  };
  