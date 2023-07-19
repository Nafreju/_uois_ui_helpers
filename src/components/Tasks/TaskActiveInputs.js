
import { TaskDateInput } from "./TaskDateInput"
import { TaskStringInput } from "./TaskStringInput"


const dateStyle = {
    flex: 1,
    backgroundColor: 'lightblue',
  }
/**
 * Representig callbacks for entering text and date into task
 * @function
 * @param {(Object)=>void}onTaskChange
 * @param {string}task
 * @returns {JSX.Element} - The rendered component
 */
export const TaskActiveInputs = ({onTaskChange, task}) => {  
    const onNameChange = (newName) => {
      onTaskChange({...task, name:newName})                 
    }
  
    const onBriefDescChange = (newBriefDesc) => {
      onTaskChange({...task, briefDes:newBriefDesc})
    }
  
    const onDetailedDescChange = (newDetailedDesc) => {
      onTaskChange({...task, detailedDes:newDetailedDesc})
    }
  
    const onReferenceChange = (newReference) => {
      onTaskChange({...task, reference:newReference})
    }
  
    const onDateOfSubmissionChange = (newSubDate) => {
      onTaskChange({...task, dateOfSubmission:newSubDate})
    }
  
    const onDateofFulfillmentChange = (newFulDate) => {
      onTaskChange({... task, dateOfFulfillment:newFulDate})
    }
    
    return (
        <div>
            <TaskStringInput info="název úkolu" onStringChange={onNameChange}/>
            <TaskStringInput info="stručný popis úkolu" onStringChange={onBriefDescChange}/>
            <TaskStringInput info="úplný popis úkolu" onStringChange={onDetailedDescChange}/>
            <TaskStringInput info="odkaz na stránku" onStringChange={onReferenceChange}/>

            <div style={{display: 'flex'}}>
                <div style={dateStyle}>
                    <TaskDateInput info="Datum odevzdání:" onDateChange={onDateOfSubmissionChange}/>
                </div>

                <div style={dateStyle}>
                    <TaskDateInput info="Datum naplnění:" onDateChange={onDateofFulfillmentChange}/>
                </div>      
            </div>
        </div>
    )
}