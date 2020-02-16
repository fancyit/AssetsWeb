const initState = {
    totalItems: 0,
    isLoading: true
};
const assetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ERROR':                      
            return {
                ...state,
                totalItems: 0,
                assets:[],
                isLoading: false,
                fetchError: action.response.message
            };
        case 'FETCH_SUCCESS':            
            return {
                ...state,
                totalItems: action.response.length,
                assets: action.response,
                isLoading: false
            };
        default:
            return state;
    }
};
export default assetReducer