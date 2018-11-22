import { combineReducers } from 'redux'
import addUserReducers from './addUserReducers';

export default combineReducers({
    users: addUserReducers
})