import React from 'react';
import './LoginMenu.css';
import Login from './Login';
import Register from './Register';

class LoginMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        }
    }

    showLoginBox = () => {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    showRegisterBox = () => {
        this.setState({isLoginOpen: false, isRegisterOpen: true})
    }
    render(){
        return(
            <div>
                <div className='loginMenuContainer1'>
                    <div className='loginMenuContainer2'>
                        <div id='loginCss' onClick={this.showLoginBox}>Login</div>
                        <div id='registerCss' onClick={this.showRegisterBox}>Register</div>
                    </div>
                </div>
                <div>
                    {this.state.isLoginOpen && <Login/>}
                    {this.state.isRegisterOpen && <Register/>}
                    </div>
            </div>
        )
    }
}

export default LoginMenu;