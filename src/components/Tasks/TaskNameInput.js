//input pro název úkolu
export const TaskNameInput = ({name, onNameChange, task, actions}) => {
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