import { TextAreaDelayed } from "components/TextAreaDelayed"
import { TextInput } from "components/TextInput"
/**
 * Representing multiline input for task name.
 * After 300 ms of delay task name is updated on the server and store. 
 * After that changed task name is rendered on the page.
 * @function
 * @param {string} task
 * @param {Object} actions
 * @returns 
 */
export const TaskNameChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, name:value})
    }

    return (
        <TextAreaDelayed key={task.id} placeholder={task.name} 
            value={task.name} onChange={handleChange}/>
    )
}