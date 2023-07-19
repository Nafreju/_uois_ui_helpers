import { TaskNameChange } from "./TaskNameChange";
import { TextAreaDelayed } from "components/TextAreaDelayed";
import { DateInputChange } from "./TaskDateChange";
import { formatDate } from "utils/DateUtils";
import { TaskDetailedDesChange } from "./TaskDetailedDesChange";
import { TaskDateChange } from "./TaskDateChange";
import { TaskReferenceChange } from "./TaskReferenceChange";

//komponenta řádky
export const TaskRow = ({task, actions, index}) => {
    const today = new Date().getTime();   //vytváření datumu a času
    const dateEntryTD = formatDate(task.dateOfEntry)
    const briefDesServerChange = (value) => {
      //add mutation to change atribute
    actions.updateTask({...task, briefDes:value})
    }
//tabulka pro zadání úkolu uživateli a input 1 pro stručný popis úkolu
//vrací id  uživatele, stručný popis úkolu, datum odevzdání a naplnění, detailní popis úkolu a odkaz
    return (
      <tr>
        <th>{index + 1}</th>
        <td><TaskNameChange task={task} actions={actions}/></td>
        <td>{dateEntryTD}</td>
        <td> <TextAreaDelayed key={task.id} placeholder={task.briefDes} value={task.briefDes} onChange={briefDesServerChange}/></td>
        <td> <TaskDetailedDesChange task={task} actions={actions}/></td>
        <td> <a href={task?.reference}>{task?.reference}</a><TaskReferenceChange task={task} actions={actions}/></td>
      </tr>
    );
  };
  