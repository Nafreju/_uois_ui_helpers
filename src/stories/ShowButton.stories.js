import { MultipleCards } from "../components/MultipleCards"
import { AssignmentsCard } from "../components/AssignmentsCard"
import {ShowButton} from "../components/ShowButton"
import { Assignments, Students } from "./DataStructures"
import { Card } from "react-bootstrap"
import { StudentsCard } from "../components/StudentsCard"

export default {
    title: "Button visualizations",
    component: ShowButton,
}


export const ShowButtonStory = {
    render: (args) => <ShowButton {...args}/>,
    args: {
        hideMessage: "Zobrazit úkoly",
        showMessage: "Skrýt úkoly",
        component: <StudentsCard student={Students.all[0]}/>
        //component: <MultipleCards array={Assignments.all}/>
    }
}