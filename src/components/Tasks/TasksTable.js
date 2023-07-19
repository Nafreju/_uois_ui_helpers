import { TaskRow } from "./TaskRow"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserTaskInputModal } from "components/User/UserTaskInputModal";
import { TaskTableHeader } from "./TaskTableHeader";

/**
 * Representing table of tasks for one user
 * @function
 * @param {string} props.userId id of user whose task will be displayed
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} table with header and rows if fetch was successful
 */
export const TasksTable = ({userId, actions}) => {
    const users = useSelector(state => state.users)

    //if userId changed - selected different - fetch his task
    useEffect(
        () => {
            //fetch tasks by userId
            actions.userTasksFetch(userId)
        }, [userId]
    )
    
    const [showModal, setShowModal] = useState(false)//modal for inserting new task

    const addTask = (event) => {
        setShowModal(true)
    }

    let user = users[userId]
    
    //maps user tasks into rows or waiting for successful fetch
    if (user?.tasks) {
        return (
            <div>
                <table className="table" >
                    <TaskTableHeader onClickAddTask={addTask} user={user}/>
                    <tbody>
                        {user?.tasks?.map((task, index) => (
                            <TaskRow key={task.id} index={index} task={{...task, userId:userId}} actions={actions}/>
                        ))}
                    </tbody>
                </table>
                <UserTaskInputModal showModal={showModal} setModal={setShowModal} user={user} actions={actions}/>
            </div>
        )
    } else {
        return (
            <div>Načítám úkoly...</div>
        )
    }
}   