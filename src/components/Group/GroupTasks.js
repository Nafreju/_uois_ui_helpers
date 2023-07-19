import { useEffect } from "react"
import { TasksTable } from "../Tasks/TasksTable"
import { GroupTaskInputModal } from "components/Group/GroupTaskInputModal"
import { useState } from "react"
/**
 * Represeting all tasks of selected group by parent reactSelect component
 * @function
 * @param {string} groupId ID of group which tasks are beeing rendered
 * @param {Object} actions actions containing async fetches
 * @param {Object} groups groups from store
 * @returns {JSX.Element} All tasks as Tables
 */
export const GroupTasks = ({groupId, actions, groups}) => {
    useEffect(
        () => {
            //fetch memberships by groupId
            actions.groupMembershipsFetch(groupId)
        }, [groupId]
    )
    
    const group = groups[groupId]
    const memberships = group?.memberships
    
    //hook to be responsible for displaying modal when defining atributes of new task
    const [showModal, setShowModal] = useState(false)
    
    //callback to button for "showing" modal
    const addTask = () => {
        setShowModal(true)
    }
    
    //memberships are mapped into Tables where each Table renders all task of given member
    return (
        <div>
            {Boolean(group) && <button type="button" className="btn btn-outline-success btn-sm" onClick={addTask}>přidejte úkol skupině {groups[groupId]?.name}</button>}
                            
            {memberships?.map(
                (m, index) => <TasksTable key={index} userId={m.user.id} actions={actions}/>
            )}

            <GroupTaskInputModal showModal={showModal} memberships={memberships} 
                setModal={setShowModal} group={group} actions={actions}/>
        </div>
    )
}