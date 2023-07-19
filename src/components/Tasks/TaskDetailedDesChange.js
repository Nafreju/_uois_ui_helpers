import { TextAreaDelayed } from "components/TextAreaDelayed";
/**
 * @param {string} task
 * @param {Object} actions
 * @returns 
 */
export const TaskDetailedDesChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, detailedDes:value})
    }

    return(
         <TextAreaDelayed key={task.id} placeholder={task.detailedDes} 
         value={task.detailedDes} onChange={handleChange}/>
    )  
}