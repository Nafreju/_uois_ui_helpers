

export const TaskStringInput = ({info, onStringChange}) => {
    const handleChange = (event) => {
        onStringChange(event.target.value)
    }

    return (
        <div className="form-group">
            <small className="form-text text-muted">Zadejte {info}</small>
            <input type="text" className="form-control" placeholder={info} onChange={handleChange}/>
        </div> 

    )
}