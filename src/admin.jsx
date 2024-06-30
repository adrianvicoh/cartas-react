import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import headerAdmin from './components/headerAdmin';

function Admin() {

    return (
        <>
            <headerAdmin />
            <Outlet />
        </>
    )
}

export default Admin