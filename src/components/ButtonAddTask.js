import { useState } from "react"
import { Button } from "react-bootstrap"

/**
 * Representing button for assingning task to given user on server
 * @function 
 * @param {Object} props.task task to be inserted on server
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} Button which after click inserts task on server and shows green tick label
 */
export const ButtonAddTask = ({task, actions}) => {
    const [taskStored, setTaskStored] = useState(false)

    const saveTask = () => {
        actions.addTask(task) //creating task on server
        setTaskStored(true)
    }
    
    return (
        <div>
            <Button variant="primary" onClick={saveTask}>Uložit úkol</Button>
            {taskStored && <label style={{color:"green"}}>Úkol uložen✔</label>}
        </div>        
    )
}