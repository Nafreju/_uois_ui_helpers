/**
 * Representig universal component. 
 * Given callback takes string as current value of text input when is changed.
 * @function
 * @param {string} props.info info what string input will this component represent
 * @param {(string) => void} props.onStringChange callback changing string - setter
 * @returns {JSX.Element} text input without delay which is calling callback when changed   
 */
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