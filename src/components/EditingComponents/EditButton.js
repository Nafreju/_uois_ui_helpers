import { Button } from "react-bootstrap"
import { useState } from "react"

export const EditButton = ({task, actions}) => {
    const [showEditor, setShowEditor] = useState(false)

    const onClick = (event) => {
        setShowEditor(!showEditor)
    }

    return <div>
        <Button onClick={onClick}>Uprav úkol</Button>
        {showEditor && <label>editooor</label>}
    </div>


}