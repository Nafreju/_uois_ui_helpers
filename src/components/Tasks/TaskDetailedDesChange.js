import { TextAreaDelayed } from "components/TextAreaDelayed";

//input 2 pro detailní popis úkolu
//komponenta 
export const TaskDetailedDesChange = ({task, actions}) => {
    const handleChange = (value) => {                       //vezme hodnotu,která je vepsaná do inputu
        actions.updateTask({...task, detailedDes:value})
    }

    return(
         <TextAreaDelayed key={task.id} placeholder={task.detailedDes} 
         value={task.detailedDes} onChange={handleChange}/>//aktualizace když se změní
    )  
}