import { TextInput } from "components/TextInput"

export const TaskNameChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, name:value})
    }

    return (
        <TextInput key={task.id} placeholder={task.name} 
            value={task.name} onChange={handleChange}/>
        
    )
}