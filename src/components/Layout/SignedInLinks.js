import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New asset</NavLink></li>
            <li><NavLink to='/'>Sign out</NavLink></li>
            <li>
                <NavLink to='/' className='btn-floating btn-big #78909c blue-grey lighten-1'>
                    AB
                </NavLink>
            </li>
        </ul>
    )
}
export default SignedInLinks