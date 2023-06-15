import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
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
    ) :<Navigate to={"/login"}/>
}

export default AdminProtected