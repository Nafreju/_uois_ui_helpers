import { useSelector } from "react-redux"
import { TextInput } from "../TextInput"
import { useState } from "react"
import ReactSelect from 'react-select';
import { GroupTasks } from "./GroupTasks";
/**
 * @param {Object} actions
 * @returns 
 */
export const GroupSelectInteractive = ({actions}) => {
    const groups = useSelector(state => state.groups)
    const [selectedGroupId, setSelectedGroupId] = useState(null)

    const handleInputChange = (value) => {
        //performs short fetch by letters
        actions.partGroupsFetch(value)
        setSelectedGroupId(null)
    }

    const handleSelectChange = (selected) => {
        setSelectedGroupId(selected.value)
        //probably fetch memberships and then userTasks
    }

    let options = []

    if (groups) {
        options = Object.entries(groups).map(group => ({
            label: group[1].name, value: group[1].id
        }))
    }

    const placeholder = "Vyberte učební skupinu z nabídky " + options.length

    return (
        <div>
            <TextInput placeholder="Zadejte zkratku učební skupiny" onChange={handleInputChange} value=""/>
            {options.length > 0 && <ReactSelect options={options} placeholder={placeholder} onChange={handleSelectChange} value={null} />}
            {Boolean(selectedGroupId) && <GroupTasks groupId={selectedGroupId} actions={actions} groups={groups}/>}
        </div>
    )
}