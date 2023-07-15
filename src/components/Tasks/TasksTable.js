import { TaskRow } from "./TaskRow"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../../stories/DataStructures"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserTaskInputModal } from "components/UserTaskInputModal";
import { TaskTableHeader } from "./TaskTableHeader";

//const array = Assignments.all
//multiplecard


export const TasksTable = ({userId, actions}) => {
    const users = useSelector(state => state.users)
    //if userId changed -useEffect, fetch his tasks
    useEffect(
        () => {
            //fetch his tasks by userId
            actions.userTasksFetch(userId)
        }, [userId]
    )
    
    const [showModal, setShowModal] = useState(false)

    const addTask = (event) => {
        setShowModal(true)
    }

    let user = users[userId]
    if (user?.tasks) {
        return (
            <div>
                <table className="table" >
                    <TaskTableHeader onClickAddTask={addTask} user={user}/>
                    <tbody>
                        {user?.tasks?.map((task) => (
                            <TaskRow key={task.id} task={{...task, userId:userId}} actions={actions}/>
                            ))}
                    </tbody>
                </table>
                <UserTaskInputModal showModal={showModal} setModal={setShowModal} user={user} actions={actions}/>
            </div>
        )
    } else {
        return (
            <div>
                Načítám úkoly...
            </div>
        )
    }
}   