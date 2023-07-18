import { TextAreaDelayed } from "components/TextAreaDelayed"
import { TextInput } from "components/TextInput"

export const TaskNameChange = ({task, actions}) => {
    const handleChange = (value) => {
        actions.updateTask({...task, name:value})
    }

    return (
        <TextAreaDelayed key={task.id} placeholder={task.name} 
            value={task.name} onChange={handleChange}/>
        
    )
}