import React from 'react'
import Navbar from '../navbar/NavBar'

import { Outlet } from 'react-router-dom'
import { useAuthentication } from '../../store/store'

function AdminProtected() {
    const token = useAuthentication(state => state.auth.token)
    return token ? (
        <>
        <div style={{ height: "100%", width: '' }}>
            <div>
                <Outlet />
            </div>
            </div>

        </>
    ) :<h1>you don't have Authorization</h1>
}

export default AdminProtected