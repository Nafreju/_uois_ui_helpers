import { TaskNameInput } from "./TaskNameInput"
import { TaskBriefDescriptionInput } from "./TaskBriefDescriptionInput"
import { TaskDetailedDescriptionInput } from "./TaskDetailedDescriptionInput"
import { TaskReferenceInput } from "./TaskReferenceInput"
import { TaskDateFulfillmentInput } from "./TaskDateFulfillmentInput"
import { TaskDateSubmissionInput } from "./TaskDateSubmissionInput"


const dateStyle = {
    flex: 1,
    backgroundColor: 'lightblue',
  }
  //eveeeeennnnts do commit
  //rename callbacks onNameChange
export const TaskActiveInputs = ({setTask, task, actions}) => {  
  //callbacks
    const onNameChange = (newName) => {
        setTask({...task, name:newName})                 
      }
    
      const onBriefDescChange = (newBriefDesc) => {
        setTask({...task, briefDes:newBriefDesc})
      }
    
      const onDetailedDescChange = (newDetailedDesc) => {
        setTask({...task, detailedDes:newDetailedDesc})
      }
    
      const onReferenceChange = (newReference) => {
        setTask({...task, reference:newReference})
      }
    
      const onDateOfSubmissionChange = (newSubDate) => {
        setTask({...task, dateOfSubmission:newSubDate})
      }
    
      const onDateOfFulfillmentChange = (newFulDate) => {
        setTask({... task, dateOfFulfillment:newFulDate})
      }
      //add actions, onTaskNameChange
    return (
        <div>
            <TaskNameInput name="název úkolu" onNameChange={onNameChange} task={task} />
            <TaskBriefDescriptionInput name="stručný popis úkolu" onBriefDescChange={onBriefDescChange}/>

            <TaskDetailedDescriptionInput name="úplný popis úkolu" onDetailedDescChange={onDetailedDescChange}/>

            <TaskReferenceInput name="odkaz na stránku" onReferenceChange={onReferenceChange}/>

            <div style={{display: 'flex'}}>
            <div style={dateStyle}>
                <TaskDateSubmissionInput name="Datum odevzdání:" onDateOfSubmissionChange={onDateOfSubmissionChange}/>
            </div>

            <div style={dateStyle}>
                <TaskDateFulfillmentInput name="Datum naplnění:" onDateofFulfillmentChange={onDateOfFulfillmentChange}/>
                </div>      
            </div>
        </div>
    )
}