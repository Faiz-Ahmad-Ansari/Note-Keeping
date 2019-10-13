import React from'react';
import './Register.css';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : 'Faiz',
            lastName : 'Ansari',
            contactNumber : 7775995030,
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
            <div className='registerContainer1'>
                <div className='registerContainer2'>
                    <h1>Register</h1><hr/>
                    <form className='registerForm' onSubmit={this.submitHandler}>
                        <label>First Name</label><br/>
                        <input type='text' name='firstName' placeholder='First Name'/>
                        <br/>
                        <label>Last Name</label><br/>
                        <input type='text' name='lastName' placeholder='Last Name'/>
                        <br/>
                        <label>Contact Number</label><br/>
                        <input type='number' name='contactNumber' placeholder='Contact Number'/>
                        <br/>
                        <label>Email</label><br/>
                        <input type='email' onChange={this.handleChange} name='email' placeholder ='Email'/>
                        <br/>
                        <label>Password</label><br/>
                        <input type='password' onChange={this.handleChange} name='password' placeholder ='Password'/>
                        <br/><br/>
                        <input type='submit' placeholder ='Submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;