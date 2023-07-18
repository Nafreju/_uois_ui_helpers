import { useState } from "react"
import { GroupTaskInputs } from "./GroupTaskInputs"
import { Button, Modal, ModalHeader } from 'react-bootstrap';
import { ButtonAddTasks } from "../ButtonAddTasks";

export const GroupTaskInputModal = ({showModal, setModal, group, actions}) => {
  const [newTask, setNewTask] = useState()

    const handleClose = () => {
        setModal(false)
        setNewTask()
    }

    return (
        <div>
        <Modal show={showModal} onHide={handleClose}>
          <ModalHeader />
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