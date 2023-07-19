/**
 * Representing default read only input 
 * @function
 * @param {string} info 
 * @param {string} defVal
 * @returns {JSX.Element} The rendered component.
 */
export const DummyInput = ({info, defVal}) => {
  return (
      <form>
        <div className="form-group">
          <small className="form-text text-muted">Zadejte {info}</small>
          <input type="text" className="form-control" defaultValue={defVal} readOnly/>
        </div>
      </form>
  )
}
