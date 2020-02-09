const initState = {
    authError: null,
    isLoggedIn: false
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
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
                role: action.response.userRole
            };
        default:
            return state;
    }
};
export default authReducer