

export const TaskDetailedDescriptionInput = ({name, setTaskDetailedDescription}) => {
    const handleChange = (event) => {
      setTaskDetailedDescription(event.target.value)
    }
  
    return (
        
          <div className="form-group">
            <small className="form-text text-muted">Zadejte {name}</small>
            <input type="text" className="form-control"  placeholder="úplný popis úkolu" onChange={handleChange}/>
          </div>
    
    )
  }
