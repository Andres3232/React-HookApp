import React from 'react'
import {Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`} to='/'>UseContext</NavLink> 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`} to='/home'>Home</NavLink> 
                        <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`} to='/about'>Aboout</NavLink> 
                        <NavLink className={`nav-link ${ (navData) => navData.isActive && 'active' }`} to='/login'>Login</NavLink> 
                    </div>
                </div>
        </div>
     </nav>
    )
}
