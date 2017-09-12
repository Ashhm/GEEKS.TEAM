import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _user = null;
let _isError = null;
//loading necessary for show some process bar or smth like that
let _isLoading = false;
let _isLoggedIn = false;

//creating new object with EventEmitter prototype, and additional methods.
const Store = Object.assign({}, EventEmitter.prototype, {
    //this is just handling loading event
    isLoading() {
        return _isLoading;
    },

    isAuthenticated() {
        return _isLoggedIn;
    },

    getUser() {
        return _user;
    },

    //todo: read about this three methods
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    //todo: read about this three methods
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    //todo: read about this three methods
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    console.log(action.type);
    switch (action.type) {
        //this case just set loading event
        case Constants.AUTH_REQUEST: {
            _isLoading = true;
            Store.emitChange();
            break;
        }
        case Constants.LOGIN_REQUEST: {
            _isLoading = true;
            Store.emitChange();
            break;
        }
        //this should record in _user some date
        case Constants.AUTH_SUCESS: {
            _isLoading = false;
            _isLoggedIn = true;
            _user = action.user;
            Store.emitChange();
            break;
        }

        case Constants.LOGIN_SUCCESS: {
            _isLoading = false;
            _isLoggedIn = true;
            _user = action.user;
            Store.emitChange();
            break;
        }
        default: {
            console.log(`Nothing happend yet.`);
        }
    }
});

export default Store;