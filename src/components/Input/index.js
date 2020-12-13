import React from 'react'
import './Input.scss'

const Input = ({
    label,
    name,
    id,
    type,
    placeholder,
    value,
    onChange

}) => {

    return (

        <div className='form-group'>

            <label htmlFor={id}>{label}</label>

            <input
                name={name}//name dediğimiz logindeki 'name' props.name yerine yukarda tanımladık direk yazdık (label,name,..)
                type={type}
                id={id}
                placeholder={placeholder}
                value={value} // email yazılan değerleri value tutuyo
                onChange={onChange} //email: e.target.value  email kısmına yazılan herşeyi emaile yazıp ekrana göstercek
            />
        </div>

    )


}

export default Input;