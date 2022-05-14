import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import logo from '../images/wf.PNG'
import './Logo.css'

function Logo() {

    return (

        <Link to='sign-up' className='nav-logo'>
            <img src='{logo' alt='Logo' ></img>
        </Link>
    )
}

export default Logo;