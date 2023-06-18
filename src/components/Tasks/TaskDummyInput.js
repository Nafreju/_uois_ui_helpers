
export const TaskDummyInput = ({name, userName}) => {
  return (
      <form>
        <div className="form-group">
          <small className="form-text text-muted">Zadejte {name}</small>
          <input type="text" className="form-control" defaultValue={userName} readOnly />
        </div>


      </form>
  )
}
