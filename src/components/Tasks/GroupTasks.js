import { useSelector } from "react-redux"
import { useEffect } from "react"
import { TasksTable } from "./TasksTable"
import { actions } from "utils/store"
import { GroupTaskInputModal } from "components/GroupTaskInputModal"
import { useState } from "react"

export const GroupTasks = ({groupId, actions, groups}) => {
    useEffect(
        () => {
            //fetch memberships by groupId
            actions.groupMembershipsFetch(groupId)
        }, [groupId]
    )

    const group = groups[groupId]
    //showModalhook and taskinput modal but different modal 
    //here comes the button to add Task into whole group
    const [showModal, setShowModal] = useState(false)
    const addTask = (event) => {
        setShowModal(true)
    }

    return (
        <div>
            {Boolean(group) && <button type="button" className="btn btn-outline-success btn-sm" onClick={addTask}>přidejte úkol skupině {groups[groupId]?.name}</button>}
                                
            {memberships?.map(
                (m, index) => <TasksTable key={index} userId={m.user.id} actions={actions}/>
            )}
            <GroupTaskInputModal showModal={showModal} 
                setModal={setShowModal} group={group} actions={actions}/>
        </div>
    )
    

}