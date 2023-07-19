import { useState } from "react"
import { GroupTaskInputs } from "./GroupTaskInputs"
import { Button, Modal, ModalHeader } from 'react-bootstrap';
import { ButtonAddTasks } from "../ButtonAddTasks";
/**
 * A modal for inserting a group task
 * @function
 * @param {bool} props.showModal responsible for showing or not showing modal
 * @param {(bool) => void} props.setModal used for closing modal
 * @param {Object} props.group group of users which task is added to
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} representing modal for defining atributes of created task
 */
export const GroupTaskInputModal = ({showModal, setModal, group, actions}) => {
    //setNewTask is the most upper callback for defining atributes of task
    const [newTask, setNewTask] = useState()

    const handleClose = () => {
        setModal(false) //"closes" modal - making invisible
        setNewTask()
    }

    return (
        <div>
            <Modal show={showModal} onHide={handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Vytvořte úkol</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <GroupTaskInputs group={group} onTaskChange={setNewTask} task={newTask}/>
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Zavřít</Button>
                    <ButtonAddTasks group={group} task={newTask} actions={actions}/>
            </Modal.Footer>

            </Modal>
        </div>
    )
}