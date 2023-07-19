import { TextAreaDelayed } from "components/TextAreaDelayed";
/**
 * Representing multiline minput for detailed description of the task.
 * After 300 ms of delay detailed description is updated on the server and store. 
 * After that changed detailed deccription is rendered on the page.
 * 
 * @function
 * @param {string} task
 * @param {Object} actions
 * @returns {JSX.Element} - The rendered component
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