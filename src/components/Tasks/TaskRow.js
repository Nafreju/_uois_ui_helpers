import { TextInput } from "components/TextInput";
import { TaskNameChange } from "./TaskNameChange";
import { TextAreaDelayed } from "components/TextAreaDelayed";
import { DateInputChange } from "./DateInputChange";
import { formatDate } from "utils/DateUtils";
import { TaskDetailedDesChange } from "./TaskDetailedDesChange";

export const TaskRow = ({task, actions}) => {
    const today = new Date().getTime();
    
    const dateEntryTD = formatDate(task.dateOfEntry)
    const dateSubmissionTD = formatDate(task.dateOfSubmission)
    let deadline_color = "red";
    if (today < new Date(dateSubmissionTD)) deadline_color = "green";

    console.log("taskDate from db", task?.dateOfSubmission)
    console.log("type changed", new Date(task?.dateOfSubmission).toISOString().split("T")[0])
    const briefDesServerChange = (value) => {
      //add mutation to change atribute
      actions.updateTask({...task, briefDes:value})
    }

    return (
      <tr>
        <th>{task.id}</th>
        <td><TaskNameChange task={task} actions={actions}/></td>
        <td>{dateEntryTD}</td>
        <td style={{color:deadline_color}}><DateInputChange task={task} actions={actions}/></td>
        <td> <TextAreaDelayed key={task.id} placeholder={task.briefDes} value={task.briefDes} onChange={briefDesServerChange}/></td>
        <td> <TaskDetailedDesChange task={task} actions={actions}/></td>
        <td> <a href={task.reference} target="_blank">{task.reference}</a></td>

      </tr>



    );
  };
  