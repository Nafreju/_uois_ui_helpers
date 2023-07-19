import { TextInput } from "components/TextInput"

export const TaskReferenceChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, reference:value})
    }

    return (
        <TextInput key={task.id} placeholder={task.reference} 
        value={task.reference} onChange={handleChange}/>
    )

}