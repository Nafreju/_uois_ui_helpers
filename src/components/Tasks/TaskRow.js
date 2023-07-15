import { TextInput } from "components/TextInput";
import { TaskNameChange } from "./TaskNameChange";
import { TextAreaDelayed } from "components/TextAreaDelayed";

function formatDate(date) {
  const dateToFormat = new Date(date)
  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth() + 1; // Months are zero-indexed
  const year = dateToFormat.getFullYear();

  return `${day}.${month}.${year}`;
}


export const TaskRow = ({task, actions}) => {
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
        <th scope="row">{task.id}</th>
        <td><TaskNameChange task={task} actions={actions}/></td>
        <td> {dateEntryTD}</td>
        <td style={{color:deadline_color}}> {dateSubmissionTD}</td>
        <td> <TextAreaDelayed key={task.id + 1} placeholder={task.briefDes} value={task.briefDes} onChange={briefDesServerChange}/></td>
        <td> {task.detailedDes}</td>
        <td> <a href={task.reference} target="_blank">{task.reference}</a></td>

      </tr>



    );
  };
  