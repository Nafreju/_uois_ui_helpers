import { TextInput } from "components/TextInput"
/**
 * @param {string}task
 * @param {Object} actions
 * @returns 
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