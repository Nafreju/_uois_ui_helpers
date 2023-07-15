
import { useState } from "react"
import { Button } from "react-bootstrap"


export const ButtonAddTask = ({task, actions}) => {
    const [taskStored, setTaskStored] = useState(false)

    const saveTask = () => {
        console.log("this sending", task)
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