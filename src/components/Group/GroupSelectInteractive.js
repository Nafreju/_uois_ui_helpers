import { useSelector } from "react-redux"
import { TextInput } from "../TextInput"
import { useState } from "react"
import ReactSelect from 'react-select';
import { GroupTasks } from "./GroupTasks";
/** 
 * Representing select of group with text input fetch from server by 3 letters
 * @function
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} representing group selection
 */
export const GroupSelectInteractive = ({actions}) => {
    const groups = useSelector(state => state.groups)
    const [selectedGroupId, setSelectedGroupId] = useState(null)

    const handleInputChange = (value) => {
        //performs part (short) fetch by letters - store is updated afterwards and this component is rerendered
        actions.partGroupsFetch(value)
        setSelectedGroupId(null)
    }

    const handleSelectChange = (selected) => {
        setSelectedGroupId(selected.value)
    }

    let options = []
    //maps groups from store into options which can be used in ReactSelect
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