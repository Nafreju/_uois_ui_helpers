
import { TaskDateInput } from "./TaskDateInput"
import { TaskStringInput } from "./TaskStringInput"


const dateStyle = {
    flex: 1,
    backgroundColor: 'lightblue',
  }


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const TaskActiveInputs = ({setTask, task}) => {  
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
  
    const onDateofFulfillmentChange = (newFulDate) => {
      setTask({... task, dateOfFulfillment:newFulDate})
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