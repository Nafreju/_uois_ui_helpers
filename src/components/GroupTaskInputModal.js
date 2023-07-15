import { useState } from "react"
import { GroupTaskInputs } from "./GroupTaskInputs"
import { Button, Modal } from 'react-bootstrap';
import { ButtonAddTasks } from "./ButtonAddTasks";
import { currentDate } from "utils/dateFormater";

export const GroupTaskInputModal = ({showModal, setModal, group, actions}) => {
  const [newTask, setNewTask] = useState({
    briefDes:"",
    detailedDes: "",
    dateOfSubmission:currentDate(),
    dateOfFulfillment:currentDate(),
    reference:""
  })

    const handleClose = () => {
        setModal(false)
        setNewTask()
    }
    console.log("should have it", newTask)
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