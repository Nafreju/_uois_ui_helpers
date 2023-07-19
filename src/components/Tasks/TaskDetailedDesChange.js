import { TextAreaDelayed } from "components/TextAreaDelayed";

/**
 * Representing multiline input for detailed description of the task.
 * After 300 ms of delay detailed description is updated on the server and store. 
 * After that changed detailed deccription is rerendered on the page.
 * 
 * @function
 * @param {Object} props.task representing current value of task
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} text area when written into changing detailed description of task
 */
export const TaskDetailedDesChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, detailedDes:value})
    }

    return (
        <TextAreaDelayed key={task.id} placeholder={task.detailedDes} 
            value={task.detailedDes} onChange={handleChange}/>
    )  
}