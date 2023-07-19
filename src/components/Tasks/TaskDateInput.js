import { minMaxDate } from "utils/DateUtils"

/**
 * Choosing a suitable date and time for new task which is about to be created
 * @function
 * @param {string} props.info text info representing which date is about to be changed
 * @param {(Date) => void} props.onDateChange 
 * @returns {JSX.Element} date input calendar
 */
export const TaskDateInput = ({info, onDateChange}) => {
    const handleDateChanged = (event) => {
        onDateChange(event.target.value)
    }

    const [minDate, maxDate] = minMaxDate() //for setting range of input type date

    return (
        <form>
            <label>
                <div>{info}</div>
                <input type="date" min={minDate} max={maxDate} onChange={handleDateChanged}/>
            </label>
        </form>
    )
}