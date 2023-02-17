import React from 'react'
import SignUp from './SignUp'


// import './form.scss'


function StudentFrom() {
    return (
        <div className='container mt-3 form' style={{backgroundColor:"smokewhite"}}>
             <div className='row justify-content-center'>
                <div className='col-md-5 '  >
                    <SignUp  />
                </div>
            </div>
        </div>
    )
}

export default StudentFrom;