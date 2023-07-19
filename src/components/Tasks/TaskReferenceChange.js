import { TextInput } from "components/TextInput"
/**
 * Representing single line input for adding task reference. It is not clickable.
 * @function
 * @param {string}task
 * @param {Object} actions
 * @returns {JSX.Element} - The rendered component
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