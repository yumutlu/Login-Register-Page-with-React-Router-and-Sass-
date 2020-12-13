import React from 'react'
import './Button.scss';

const Button = ({
    type,
    onClick,
    children

}) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className='btn-primary'>
            {children}
        </button>
    )
}

export default Button;