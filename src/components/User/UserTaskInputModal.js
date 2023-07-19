import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import { UserTaskInputs } from './UserTaskInputs';
import { ButtonAddTask } from '../ButtonAddTask';

/**
 * Representing modal for defining task for user
 * @function
 * @param {bool} props.showModal representing if modal is shown on screen or not
 * @param {(bool)=> void} props.setModal callback to set showModal
 * @param {Object} props.user user whose task can be created
 * @param {Object} props.actions actions containing async fetches
 * @returns {JSX.Element} Modal in which task for given user can be created
 */
export const UserTaskInputModal = ({showModal, setModal, user, actions}) => {
  const [newTask, setNewTask] = useState({userId:user.id})//sets userId of task before Modal is shown

  const handleClose = () => {
    setModal(false)
    setNewTask({userId:user.id})
  };

  //containing inputs which define atributes of task and button to create task on server
  return (
    <div>
        <Modal show={showModal} onHide={handleClose}>
            
            <Modal.Header closeButton>
                <Modal.Title>Vytvořte úkol</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <UserTaskInputs user={user} onTaskChange={setNewTask} task={newTask}/>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Zavřít</Button>
                <ButtonAddTask task={newTask} actions={actions}/>
            </Modal.Footer>
      
        </Modal>
    </div>
  )
}


