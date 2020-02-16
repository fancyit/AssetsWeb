import { httpPost } from "../../helpers/network"

export const signIn = (credentials) => {
    return (dispatch, getState, postResult) => {
        const endPoint = 'Account/Login';
        postResult = httpPost(endPoint, credentials)
            .then((res) => {
                if (res.status !== 200) {
                    dispatch({ type: 'LOGIN_ERROR', response: res.data.loginError });
                }
                else {
                    localStorage.setItem('tkn', res.data.token);
                    dispatch({ type: 'LOGIN_SUCCESS', response: res.data });
                }
            }).catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err });
            })
    }
};
export const signUp = (credentials) => {
    return (dispatch, getState, postResult) => {
        const endPoint = 'Account/Register';
        postResult = httpPost(endPoint, credentials)
            .then((res) => {
                if (res.status !== 200) {
                    dispatch({ type: 'SIGNUP_ERROR', response: res.data });
                }
                else {
                    localStorage.setItem('tkn', res.data.token);
                    dispatch({ type: 'SIGNUP_SUCCESS', response: res.data });
                }
            }).catch((err) => {
                console.log('signup error in fetch');                
                console.log(err);
                dispatch({ type: 'SIGNUP_ERROR', response: err });
            })
    }
};

