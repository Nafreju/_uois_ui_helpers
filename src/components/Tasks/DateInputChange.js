import { minMaxDate } from "utils/DateUtils"
import { formatDate } from "utils/DateUtils"


export const DateInputChange = ({task, actions}) => {
    const [minDate, maxDate] = minMaxDate()
    const handleDateChanged = (event) => {
        const newDate = event.target.value
        const newTask = {...task, dateOfSubmission:newDate}
        actions.updateTask(newTask)
    }

    return (
        <input type="date" min={minDate} max={maxDate} 
            defaultValue={new Date(task?.dateOfSubmission).toISOString().split("T")[0]} 
            onChange={handleDateChanged}/>
    )
}