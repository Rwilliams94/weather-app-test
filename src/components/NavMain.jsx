import React from 'react';
import {  Link, NavLink } from 'react-router-dom'

const NavMain = () => {
    return (
        <div>
            <ul>
                <li>
                <NavLink exact to='/'> 
                    <div className="link-title">
                        Home
                    </div>
                </NavLink>
                </li>
                
                <li>
                <NavLink exact to='/temperature'> 
                    <div className="link-title">
                        Temperature
                    </div>
                </NavLink>
                </li>

                <li>
                <NavLink exact to='/custom-image'> 
                    <div className="link-title">
                        Customize
                    </div>
                </NavLink>
                </li>

            </ul>
            
        </div>
    )
}

export default NavMain
