import { combineReducers } from 'redux';
import { authReducer } from "../Redux/Reducers/auth-reducer";


export default combineReducers({
    Auth: authReducer
});