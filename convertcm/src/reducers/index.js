import { combineReducers } from 'redux'
import convertNumberReducer from './convertNumberReducer'
import ChoiceUnitReducer from './ChoiceUnitReducer'
import ChoiceRightReducer from './ChoiceRightReducer'
export default combineReducers({
    data: convertNumberReducer,
    choice: ChoiceRightReducer
})