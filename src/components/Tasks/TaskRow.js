import { TextInput } from "components/TextInput";
import { Card, Row, Table } from "react-bootstrap"

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
export const TaskRow = ({index, task, actions}) => {
    const today = new Date().getTime();
    
    const dateEntryTD = new Date(task.dateOfEntry);
    const dateSubmissionTD = new Date(task.dateOfSubmission);
    let deadline_color = "red";
    if (today < dateSubmissionTD) {
      // deadline in the future
      deadline_color = "green";
    }
    console.log("row rendered", index)
    // Creating a row layout
    //<td> {briefDesc}</td>

    const briefDesServerChange = (value) => {
      //add mutation to change atribute
      console.log({...task, briefDes:value})
      actions.updateTask({...task, briefDes:value})
    }

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td> {task.name}</td>
        <td> {formatDate(dateEntryTD)}</td>
        <td style={{color:deadline_color}}> {formatDate(dateSubmissionTD)}</td>
        <td> <TextInput placeholder={task.briefDesc} value={task.briefDesc} onChange={briefDesServerChange}/></td>
        <td> {task.detailedDesc}</td>
        <td> <a href={task.reference} target="_blank">úkol</a></td>

      </tr>







      /*
      <div className="row">
        <div className="col">
          <h5>{name}</h5>
          <div>
            zadáno {dateEntryTD.toLocaleDateString()}
          </div>
          <div>
            datum odevzdání <span style={{ color: deadline_color }}>{dateSubmissionTD.toLocaleDateString()}</span>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-dark">
            <div className="card-body">
              <div className="card text-dark">
                {briefDesc}
              </div>
              <div className="card text-dark">
                {detailedDesc}
              </div>
            </div>
            <div className="card-footer">
              <a href={reference} target="_blank">odkaz na úkol</a>
            </div>
          </div>
        </div>
      </div>
      */
    );
  };
  