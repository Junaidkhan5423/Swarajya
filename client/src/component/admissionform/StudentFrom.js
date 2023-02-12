import React from 'react'
import SignUp from './SignUp'
import SignUp1 from './SignUp1.css'


// import './form.scss'


function StudentFrom() {
    return (
        <div className='container mt-3 form'>
             <div className='row justify-content-center'>
                <div className='col-md-5 '  >
                    <SignUp  />
                </div>
            </div>
        </div>
    )
}

export default StudentFrom;