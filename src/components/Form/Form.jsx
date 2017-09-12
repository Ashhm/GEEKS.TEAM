import React from 'react';

import './Form.less';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSignin = this.handleSignin.bind(this);
    }

    handleSignin() {
        let {login, password} = this.state;
        this.props.onSignin({login, password});
    }

    onLoginChange(e) {
        this.setState({login: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
        <div className='Form__main'>
            <h4>Login</h4>
            <input
                className='Form__input'
                type='text'
                placeholder='Login'
                onChange={this.onLoginChange}
            />
            <input
                className='Form__input'
                type='password'
                placeholder='Password'
                onChange={this.onPasswordChange}
            />
            <button
                className={`Form__button ${this.props.showProcessImg ? 'd-none':''}`}
                onClick={this.handleSignin}
            >Login</button>
            <button
                className={`Form__button ${this.props.showProcessImg ? '': 'd-none'}`}
            >o</button>
            <button
                className={`Form__button ${this.props.showForm ? '': 'd-none'}`}
            >LogOut</button>

        </div>
        );
    }
}