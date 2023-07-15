import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UserTaskInputs } from './UserTaskInputs';
import { ButtonAddTask } from './ButtonAddTask';
import { currentDate } from 'utils/dateFormater';
import { defaultTask } from 'utils/defaultTask';



export const UserTaskInputModal = ({showModal, setModal, user, actions}) => {
  const [newTask, setNewTask] = useState(defaultTask(user))

  const handleClose = () => {
    setModal(false)
    setNewTask(defaultTask(user))
  };


  //button should not take callBack, only params what and asyncAction (via actions props)
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vytvořte úkol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserTaskInputs user={user} setTask={setNewTask} task={newTask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Zavřít</Button>
          <ButtonAddTask task={newTask} actions={actions}/>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


