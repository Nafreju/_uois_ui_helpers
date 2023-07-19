import { useSelector } from "react-redux"
import { TextInput } from "../TextInput"
import {  useState } from "react"
import ReactSelect from 'react-select';
import { TasksTable } from "../Tasks/TasksTable";

//if something is selected
export const UserSelectInteractive = ({actions}) => {
    const users = useSelector(state => state.users)
    const [selectedUserId, setSelectedUserId] = useState(null)

    const handleInputChange = (value) => {
        actions.partUsersFetch(value)
        setSelectedUserId(null)
    }

    const handleSelectChange = (selected) => {
        setSelectedUserId(selected.value)
    }

    let options = []
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