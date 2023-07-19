
import { useState } from "react"
import { Button } from "react-bootstrap"
/**
 * @param {string} TaskDateInput
 * @param {Object} actions
 * @returns 
 */

export const ButtonAddTask = ({task, actions}) => {
    const [taskStored, setTaskStored] = useState(false)

    const saveTask = () => {
        actions.addTask(task)
        setTaskStored(true)
    }
    
    return (
        <div>
            <Button variant="primary" onClick={saveTask}>Uložit úkol</Button>
            {taskStored && <label style={{color:"green"}}>Úkol uložen✔</label>}

        </div>        
    

    )
}