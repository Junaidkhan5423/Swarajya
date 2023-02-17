import React, { useRef, useState } from 'react'
import { ErrorMessage, useField } from 'formik'
import { style } from '@mui/system'


function Textfield({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "baseline",border:'2px'}} >
            <label htmlFor={field.name} style={{fontSize:"18px"}}>{label}</label>
            <input style={{border:'2px'}} className= {`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete='off'
            />
            <ErrorMessage component='div' name={field.name} className="error" />
        </div>
    )
}

export default Textfield