'use client'

import { useState } from "react"

function InputForm({ label, id, name, type = 'text', required = false, formatter, onChange }) {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        let newValue = e.target.value

        if (formatter) {
            newValue = formatter(newValue)
        }

        setValue(newValue)
        if (onChange) onChange(newValue)
    }

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-1 font-medium">{label}</label>
            <input
                type={type}
                id={id}
                required={required}
                name={name}
                value={value}
                onChange={handleChange}
                className="form-input border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
        </div>
    )
}

export default InputForm
