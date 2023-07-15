import { TaskRow } from "./TaskRow"
import { Card, Stack } from "react-bootstrap"
import { CardGroup } from "react-bootstrap";
import { Assignments } from "../../stories/DataStructures"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserTaskInputModal } from "components/UserTaskInputModal";

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
                    <thead className="thead">
                        <tr>
                            <th scope="col" style={{color:"blue"}}>
                                <button type="button" className="btn btn-outline-success btn-sm" onClick={addTask}>přidej úkol</button>
                                <span style={{"marginRight":"10px"}} />
                                {user?.name} {user?.surname}
                                </th>
                            <th scope="col">název</th>
                            <th scope="col">datum zadání</th>
                            <th scope="col">datum odevzdání</th>
                            <th scope="col">popis</th>
                            <th scope="col">detailní popis</th>
                            <th scope="col">odkaz</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {user?.tasks?.map((task, index) => (
                            <TaskRow key={task.id} task={task} actions={actions} index={index}/>
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