import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='home-page'>
            <h1 className='page-title'>Welcome</h1>
            <div className='home-link'>
                <h2><Link className='homeLink' to='/login'>Login Page</Link></h2>
                <h2><Link className='homeLink' to='/register'>Register Page</Link></h2>
            </div>
        </div>

    )
}

export default Home;