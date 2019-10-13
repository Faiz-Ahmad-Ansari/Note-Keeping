import React from'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : 'ansarifaiz32@gmail.com',
            password : 'faiz123'
        }
    }

    handleChange = (event)=> {
        this.setState({ [event.target.name] : event.target.value});
    }

    submitHandler = (e)=>{
        e.preventDefault();
        alert(JSON.stringify(this.state))
    }
    render(){
        return(
            <div className='loginContainer1'>
                <div className='loginContainer2'>
                    <h1>Login</h1><hr/>
                    <form className='loginForm' onSubmit={this.submitHandler}>
                        <label>Email</label><br/>
                        <input type='email' onChange={this.handleChange} name='email' placeholder ='Email'/>
                        <br/>
                        <label>Password</label><br/>
                        <input type='password' onChange={this.handleChange} name='password' placeholder ='Password'/>
                        <br/>
                        <input type='submit' placeholder ='Submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;