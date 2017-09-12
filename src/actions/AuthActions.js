import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';
import * as Api from '../api/index';

const AuthActions = {
    async signin(data) {
        AppDispatcher.dispatch({
            type: Constants.LOGIN_REQUEST
        });
        try {
            const { body } = await Api.signin(data);
            AppDispatcher.dispatch({
                type: Constants.LOGIN_SUCCESS,
                user: body
            })
        } catch (err) {
            AppDispatcher.dispatch({
                type: Constants.LOGIN_FAIL,
                error: err
            })
        }
    },

    async signup(data) {
        AppDispatcher.dispatch({
            type: Constants.AUTH_REQUEST
        });

        try {
            const result = await Api.signup(data);
            console.log(result);
        } catch (err) {
            AppDispatcher.dispatch({
                type: Constants.AUTH_FAIL,
                error: err
            })
        }
    }
};

export default AuthActions;