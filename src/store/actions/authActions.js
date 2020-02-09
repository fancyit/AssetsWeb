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
export const authCheck = (expTime) => {
    return(dispatch, getState, expTime) => {
        if (Date.now() < Date.parse(expTime)) {
            console.log('dispatching authCheck');
            console.log('expires :', expTime);
            console.log(Date.now() < Date.parse(expTime));
            dispatch({type: 'default'});
        }
        dispatch({type: 'AuthExpired'});
    }
};

