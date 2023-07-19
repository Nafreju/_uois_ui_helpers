/**
 * Using callbacks that are changing task name from text input 
 * @function
 * @param {string} props.name info what is beeing displayed and about to be changed
 * @param {(Object) => void} props.onNameChange callback changing name of task
 * @returns {JSX.Element} text input where name of task can be written into
 */
export const TaskNameInput = ({name, onNameChange}) => {
    const handleChange = (event) => {
        onNameChange(event.target.value)
    }
  
    return (
        <form>
            <div className="form-group">
                <small className="form-text text-muted">Zadejte {name}</small>
                <input type="text" className="form-control" placeholder="jméno úkolu" onChange={handleChange}/>
            </div>
        </form>
    )
}