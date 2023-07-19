import { TextAreaDelayed } from "components/TextAreaDelayed"

/**
 * Representing multiline input for task name.
 * After 300 ms of delay task name is updated on the server and store. 
 * After that changed task name is rerendered on the page.
 * 
 * @function
 * @param {Object} props.task
 * @param {Object} props.actions
 * @returns {JSX.Element} text are when written into chaging name of task on server
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