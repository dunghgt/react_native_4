import { combineReducers } from 'redux'
import setcolorReducer from './setcolorReducer';

export default combineReducers({
    dataColor: setcolorReducer
})