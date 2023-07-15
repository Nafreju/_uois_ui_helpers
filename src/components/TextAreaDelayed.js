import { useState, useMemo, useCallback } from 'react'

import { CreateDelayer } from 'utils/CreateDelayer'


export const TextAreaDelayed = ({id, value, onChange, placeholder}) => {
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
        <textarea placeholder={placeholder} value={localValue} onChange={localOnChange}/>
    )
}