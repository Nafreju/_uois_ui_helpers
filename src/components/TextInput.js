import { useState, useMemo, useCallback } from 'react'
import { CreateDelayer } from 'utils/CreateDelayer'

/**
 * Editable Text (input type="text")
 * @function
 * @param {*} id mandatory identification, often related to id of entity 
 * @param {str} value value of input
 * @param {str} placeholder value of help if the text is not displayed
 * @param {(value) => void} onChange delayed callback notifying about the change
 * @returns {JSX.Element} The rendered component.
 */
export const TextInput = ({id, value, onChange, placeholder}) => {
    const [localValue, setLocalValue] = useState(value)

    const delayer = useMemo(
        () => CreateDelayer(), [id]
    )

    const localOnChange = useCallback(
        (e) => {
            const newValue = e.target.value
            setLocalValue(newValue)
            if (onChange) {
                delayer(() => onChange(newValue))
            }
        }, [id, onChange]
    )

    return (
        <input className="form-control" placeholder={placeholder} value={localValue} onChange={localOnChange}/>
    )
}