
import { useState } from "react"
import { Button } from "react-bootstrap"

/**
 * @param {string} group
 * @param {string} task
 * @param {Object} actions
 * @returns 
 */

export const ButtonAddTasks = ({group, task, actions}) => {
    const [taskStored, setTaskStored] = useState(false)

    const saveTask = () => {
        actions.addTasks(group, task)
        setTaskStored(true)
    }
    
    return (
        <div>
            <Button variant="primary" onClick={saveTask}>Uložit úkol</Button>
            {taskStored && <label style={{color:"green"}}>Úkol uložen✔</label>}

        </div>        
    

    )
}