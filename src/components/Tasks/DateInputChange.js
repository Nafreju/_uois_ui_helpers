import { minMaxDate } from "utils/DateUtils"
import { formatDate } from "utils/DateUtils"

function formatDateToYYYYMMDD(date) {
    const parts = date.split("T")[0].split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${year}-${month}-${day}`;
  }
export const DateInputChange = ({task, actions}) => {
    const [minDate, maxDate] = minMaxDate()
    const handleDateChanged = (event) => {
        const newDate = event.target.value
        const newTask = {...task, dateOfSubmission:newDate}
        actions.updateTask(newTask)
    }

    return (
        <input type="date" min={minDate} max={maxDate} 
            defaultValue={formatDateToYYYYMMDD(task?.dateOfSubmission)} 
            onChange={handleDateChanged}/>
    )
}