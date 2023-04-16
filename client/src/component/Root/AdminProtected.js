import React from 'react'
import Navbar from '../navbar/NavBar'

import { Outlet } from 'react-router-dom'

function AdminProtected() {
    return (
        <>
        <div style={{ height: "100%", width: '' }}>
            <div>
                <Outlet />
            </div>
            </div>

        </>
    )
}

export default AdminProtected