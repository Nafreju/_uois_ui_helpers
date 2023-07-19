import { minMaxDate } from "utils/DateUtils"

/**
 * Choosing a suitable date and time for task
 * @function
 * @param {string} info
 * @param {(event) => void}onDateChange
 * @returns {JSX.Element} - The rendered component
 */
export const TaskDateInput = ({info, onDateChange})=> {
    const handleDateChanged = (event) => {
      onDateChange(event.target.value)
    }
    const [minDate, maxDate] = minMaxDate()
      return (
          <form>
            <label>
              <div>
                {info}
              </div>
              <input type="date" min={minDate} max={maxDate} onChange={handleDateChanged}/>
            </label>
          </form>
      )
      }