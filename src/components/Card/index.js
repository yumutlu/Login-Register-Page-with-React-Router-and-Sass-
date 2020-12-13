import React from 'react'
import './Card.scss'

const Card = (props) => {

    return (
        <div className='card'>
            {props.children}

        </div>
        //loginde çalışan tüm herşey geldi sil çalıştır anlcaksın  {props.children}
    )
}

export default Card;