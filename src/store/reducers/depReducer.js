const initState = {
    totalItems: 0,
    isLoading: true
}
const assetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ERROR':            
            return {
                ...state,
                totalItems:0,
                isLoading: false
                //fetchError: action.response
            }
        case 'FETCH_SUCCESS':
            const Itesms = action.response.length
            return {
                ...state,

                assets: action.response
            }
        default:
            return state;
    }
}
export default assetReducer