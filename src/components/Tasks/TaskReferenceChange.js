import { TextInput } from "components/TextInput"
/**
 * Representing single line input for adding task reference. It is not clickable.
 * @function
 * @param {Object} props.task task which reference can be changed
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} text input of task reference which can be changed on server
 */
export const TaskReferenceChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, reference:value})
    }

    return (
        <TextInput key={task.id} placeholder={task.reference} 
            value={task.reference} onChange={handleChange}/>
    )
}