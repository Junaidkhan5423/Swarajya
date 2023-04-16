import React from 'react'
import Navbar from '../navbar/NavBar'

import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
        <div style={{ height: "100%", width: '' }}>
            <Navbar />
            <div>
                <Outlet />
            </div>
            </div>

        </>
    )
}

export default Root