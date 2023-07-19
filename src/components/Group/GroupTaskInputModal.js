import { useState } from "react"
import { GroupTaskInputs } from "./GroupTaskInputs"
import { Button, Modal, ModalHeader } from 'react-bootstrap';
import { ButtonAddTasks } from "../ButtonAddTasks";
/**
 * A modal for entering a group task
 * @function
 * @param {bool}showModal
 * @param {(bool)=> void}setModal
 * @param {string} group
 * @param {Object} actions
 * @returns {JSX.Element} - The rendered component
 */
export const GroupTaskInputModal = ({showModal, setModal, group, actions}) => {
  const [newTask, setNewTask] = useState()

    const handleClose = () => {
        setModal(false)
        setNewTask()
    }

    return (
        <div>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Vytvořte úkol</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <GroupTaskInputs group={group} setTask={setNewTask} task={newTask}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Zavřít</Button>
            <ButtonAddTasks group={group} task={newTask} actions={actions}/>
          </Modal.Footer>
        </Modal>
      </div>
    )
}