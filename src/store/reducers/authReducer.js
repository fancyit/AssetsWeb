const initState = {
    authError: null,
    isLoggedIn: false,
    signUpError: undefined,
    registrationMessage:''
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                isLoggedIn: false,
                authError: action.response
            };
        case 'AuthExpired':
            return {
                ...state,
                isLoggedIn: false,
                authError: action.response.data.loginError
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,                
                authError: null,
                isLoggedIn: true,
                expires: action.response.expiration,
                username: action.response.username,
                email: action.response.email,
                role: action.response.userRole,
                registrationMessage:'',
                signUpError: undefined
            };
        case 'SIGNUP_ERROR':
            console.log(action);
            return {
                ...state,
                isLoggedIn: false,
                signUpError: action.response.value
            };
            case 'SIGNUP_SUCCESS':
            console.log(action);
            return {
                ...state,                
                authError: null,
                isLoggedIn: false,                
                registrationMessage:action.response.message,
                signUpError: undefined
            };
        default:
            return state;
    }
};
export default authReducer