/**
 * Representing default read only input 
 * @function
 * @param {string} props.info info what is about to be entered
 * @param {string} props.defVal default value of what will be entered
 * @returns {JSX.Element} Readonly input to be rendered
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
