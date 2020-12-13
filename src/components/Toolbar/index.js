import React from 'react'
import './Toolbar.scss'
import { Link } from 'react-router-dom'


const Toolbar = () => {


    return (

        <nav className='toolbar'>
            <Link className='toolbar-title' to='/'>React APP</Link>

            <ul className='toolbar-links'>
                <li className='toolbar-item'>
                    <Link className='toolbar-link' to='/login'>Login</Link>
                </li>

                <li className='toolbar-item'>
                    <Link className='toolbar-link' to='/register'>Register</Link>
                </li>
            </ul>

        </nav>

    )
}

export default Toolbar;