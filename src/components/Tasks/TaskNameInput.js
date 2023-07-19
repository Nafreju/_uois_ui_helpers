/**
 * Representig callbacks that are changing task name from text input 
 * @function
 * @param {string} name
 * @param {(event) => void} onNameChange
 * @returns {JSX.Element} - The rendered component
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