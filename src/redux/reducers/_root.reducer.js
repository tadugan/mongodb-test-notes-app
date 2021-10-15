import { combineReducers } from 'redux';
import allNotes from './allNotes.reducer';
import currentNote from './currentNote.reducer';

const rootReducer = combineReducers({
    allNotes,
    currentNote,
});

export default rootReducer;
