import React, { useEffect } from 'react'
import { ErrorMessage, useField } from 'formik'
import { ToastContainer, toast } from 'react-toastify';



function Textfield({ label, ...props }) {
    const [field, meta] = useField(props)
   
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "baseline",border:'2px'}} >
            <label htmlFor={field.name} style={{fontSize:"18px",fontStyle:'10px solid'}}>{label}</label>
            <input  className= {`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete='off'
            />
            <ErrorMessage component='div' name={field.name} className="error" />
            {/* <ToastContainer /> */}

        </div>
    )
}

export default Textfield