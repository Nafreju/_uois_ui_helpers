import { useState } from "react"
import { UserSelectInteractive } from "./UserSelectInteractive"
import { actions } from "../utils/store"
import { GroupSelectInteractive } from "./GroupSelectInteractive"

export const Presences = () => {
    const [selectedOption, setSelectedOption] = useState("student")

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div className="container">
            <h2>Vyberte úkoly</h2>
                <input type="radio" className="form-check-input" id="student" value="student"
                    checked={selectedOption === "student"} onChange={handleOptionChange}/>
                <label className="form-check-label" htmlFor="student">Studenta</label>
                
                <span style={{"marginRight":"10px"}} />
                <label className="form-check-label" htmlFor="group">Učební skupiny</label>
                
                <input type="radio" className="form-check-input" id="group" value="group"
                    checked={selectedOption === "group"} onChange={handleOptionChange}/>
                
                {selectedOption === "student" && <UserSelectInteractive actions={actions}/>}
                {selectedOption === "group" && <GroupSelectInteractive actions={actions}/>}
        </div>
    )
}