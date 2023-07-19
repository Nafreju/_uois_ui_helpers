import { useState } from "react"
import { UserSelectInteractive } from "./User/UserSelectInteractive"
import { actions } from "../utils/store"
import { GroupSelectInteractive } from "./Group/GroupSelectInteractive"

/**
 * Representing home component for presences displaying task of users or users of study group
 * @function
 * @param {}
 * @returns {JSX.Element} Select user or group depending on selected RadioButton
 */
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