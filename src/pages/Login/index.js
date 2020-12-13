import React from 'react';
import { Link } from 'react-router-dom'
import './Login.scss';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

class Login extends React.Component {

    state = {

        email: '',
        password: ''
    }

    login = (e) => { // logine basıldığında temizliğiyo 
        e.preventDefault()//sayfanın reflesh edilmesini engelliyo

        console.log(this.state.email, this.state.password)
        this.setState({
            email: '',
            password: ''
        })

    };

    render() {
        return (
            <div className='login-page-wrapper'>

                <Card>
                    <h1 className='card-title'>Login Form</h1>

                    <form onSubmit={this.login}>

                        <Input

                            label='Email or Username'
                            name='email'
                            type='email'
                            id='email'
                            placeholder='Enter a email or username..'
                            value={this.state.email} // email yazılan değerleri value tutuyo
                            onChange={e => this.setState({ email: e.target.value })} />


                        <Input
                            name='password'
                            type='password'
                            id='password'
                            placeholder='Enter a password..'
                            value={this.state.password} // email yazılan değerleri value tutuyo
                            onChange={e => this.setState({ password: e.target.value })} //email: e.target.value  email kısmına yazılan herşeyi emaile yazıp ekrana göstercek

                        />

                        <Button type='submit'>
                            Login
                        </Button>
                    </form>

                    <p className='card-text'> Not a member? <Link to='/register'>Sign up now</Link></p>

                </Card>

            </div >
        )
    }
}

export default Login;