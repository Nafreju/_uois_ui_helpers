import { colorDate, minMaxDate } from "utils/DateUtils"

/**
 * Formats db date into string which can be rendered in input type date component
 * @param {Date} date from database to be formated
 * @returns {String} formated date
 */
function formatDateToYYYYMMDD(date) {
    const parts = date.split("T")[0].split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${year}-${month}-${day}`;
  }


/**
 * Renders submission date of given task with ability to change it
 * @function
 * @param {Object} props.task - the task object which date of submission is about to change
 * @param {Object} props.actions - global async actions 
 * @returns {JSX.Element} The rendered component.
 */
export const TaskDateChange = ({task, actions}) => {
    const [minDate, maxDate] = minMaxDate()
    const handleDateChanged = (event) => {
        const newDate = event.target.value
        actions.updateTask({...task, dateOfSubmission:newDate})
    }

    return (
        <input type="date" min={minDate} max={maxDate} 
            defaultValue={formatDateToYYYYMMDD(task?.dateOfSubmission)} 
            onChange={handleDateChanged} style={colorDate(task?.dateOfSubmission)}/>
    )
}