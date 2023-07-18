import { minMaxDate } from "utils/DateUtils"


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