

export const TaskDateInput = ({info, onDateChange})=> {
    const handleDateChanged = (event) => {
      onDateChange(event.target.value)
    }
  
      const today = new Date()
      const minDate = new Date();
      const maxDate = new Date()
  
      minDate.setFullYear(today.getFullYear() - 1);
      maxDate.setFullYear(today.getFullYear() + 5)
  
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