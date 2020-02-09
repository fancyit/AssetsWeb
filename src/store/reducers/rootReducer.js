import authReducer from './authReducer'
import assetReducer from './assetReducer'
import depReducer from './depReducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    auth: authReducer,
    asset: assetReducer,
    dep: depReducer
});
export default rootReducer