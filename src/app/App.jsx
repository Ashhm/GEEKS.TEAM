import React from 'react';

import AuthActions from '../actions/AuthActions';
import Store from '../store/AppStore';

import {Form} from '../components/Form/Form.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: Store.isLoading(),
        isAuthenticated: Store.isAuthenticated(),
        user: Store.getUser()
    }
}

export class App extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this);
    }

    //adding a Listener to change state
    componentDidMount() {
        Store.addChangeListener(this._onChange);
    }

    //removing Listener
    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    handleSignin(data) {
        AuthActions.signin(data);
    }

    render() {
        return (
            <div className='App'>
                <Form
                    onSignin={this.handleSignin}
                    showForm = {this.state.isAuthenticated}
                    showProcessImg={this.state.isLoading}
                />
            </div>
        );
    }

    //any change in component will affect request in store
    //when component mounted EventListener  gonna add with callback func
    _onChange() {
        this.setState(getStateFromFlux());
    }
}