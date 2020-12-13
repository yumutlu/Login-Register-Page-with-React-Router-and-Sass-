import React from 'react'
import './Register.scss'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''

    }

    register = (e) => {
        e.preventDefault();

        if (this.state.password === this.state.comfirmPassword) {

            this.setState({
                email: '',
                username: '',
                password: '',
                comfirmPassword: ''

            })

        } else {
            alert('Sifrenizi Kontrol Ediniz')
        }

    }


    render() {

        return (
            <div className='register-page-wrapper'>


                <Card>
                    <h1 className='card-title'>Register Form</h1>

                    <form onSubmit={this.register}>

                        <Input
                            label='Email Adress'
                            name='Email'
                            type='email'
                            id='email'
                            placeholder='Enter a email adress..'
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}


                        />

                        <Input
                            label='Password'
                            name='password'
                            type='password'
                            id='password'
                            placeholder='Enter a password..'
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <Input
                            label='Comfirm Password'
                            name='omfirmPassword'
                            type='password'
                            id='ComfirmPassword'
                            placeholder='Comfirm password..'
                            value={this.state.comfirmPassword}
                            onChange={e => this.setState({ comfirmPassword: e.target.value })}
                        />

                        <Button type='submit'>
                            Register
                        </Button>

                    </form>
                    <p className='card-text'>
                        Al Ready a Member <Link to='/login'>Sign in</Link>
                    </p>
                </Card>

            </div>
        )
    }
}
export default Register;
