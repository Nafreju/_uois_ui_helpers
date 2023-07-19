
import { useState } from "react"
import { Button } from "react-bootstrap"

/**
 * Representing button which is assigning task
 * to all students in given group on server
 * @function
 * @param {Object} props.group group to which members task will be added
 * @param {Object} props.task task to be added to members
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} Button after click adding task to all members of group on server
 */
export const ButtonAddTasks = ({group, task, actions}) => {
    const [taskStored, setTaskStored] = useState(false)

    const saveTask = () => {
        actions.addTasks(group, task)//adding task to all members of group on server
        setTaskStored(true)
    }
    
    return (
        <div>
            <Button variant="primary" onClick={saveTask}>Uložit úkol</Button>
            {taskStored && <label style={{color:"green"}}>Úkol uložen✔</label>}
        </div>        
    )
}