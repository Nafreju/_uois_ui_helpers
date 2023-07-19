import { useSelector } from "react-redux"
import { TextInput } from "../TextInput"
import {  useState } from "react"
import ReactSelect from 'react-select';
import { TasksTable } from "../Tasks/TasksTable";

/**
 * Representig input for finding person in database by providing at least 3 letters
 * and react select rendering user's tasks.
 * @function
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} User text input to be fetched and selector and all tasks
 */
export const UserSelectInteractive = ({actions}) => {
    const users = useSelector(state => state.users)
    const [selectedUserId, setSelectedUserId] = useState(null)

    const handleInputChange = (value) => {
        /* fetches only necessary atributes of user given by 3 letter
        which can be substrings either of name or surname */
        actions.partUsersFetch(value)
        setSelectedUserId(null)
    }

    const handleSelectChange = (selected) => {
        setSelectedUserId(selected.value)
    }

    let options = []
    //maps users from stored to ReactSelect options type
    if (users) {
        options = Object.entries(users).map(user => ({
            label: `${user[1].name} ${user[1].surname} ${user[1].email}`, value: user[1].id
        }))
    }

    const placeholder = "Vyberte studenta z nabídky " + options.length
    return (
        <div>
            <TextInput placeholder="Zadejte jméno nebo příjmení studenta" onChange={handleInputChange} value=""/>
            {options.length > 0 && <ReactSelect options={options} placeholder={placeholder} onChange={handleSelectChange} value={null}/>}
            {Boolean(selectedUserId) && <TasksTable userId={selectedUserId} actions={actions}/>}
        </div>

    )
}