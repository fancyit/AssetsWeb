import {withMobileDialog} from "@material-ui/core";

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
                assets:[]
                //fetchError: action.response
            };
        case 'FETCH_SUCCESS':
            const items = action.response.length;
            return {
                ...state,
                totalItems: items,
                assets: action.response,
                isLoading: false
            };
        default:
            return state;
    }
};
export default assetReducer