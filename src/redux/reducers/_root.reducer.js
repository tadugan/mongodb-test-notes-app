import { combineReducers } from 'redux';
import allNotes from './allNotes.reducer';

const rootReducer = combineReducers({
    allNotes,
});

export default rootReducer;
