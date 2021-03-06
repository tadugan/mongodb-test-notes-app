import { put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';

function* submitNewNote(action) {
    try {
        yield axios.post('/notes', action.payload);
        yield put({ type: 'GET_ALL_NOTES' });
    } catch (error) {
        console.log(`error POSTing new note: ${error}`);
    }
}

function* createNote() {
    yield takeLatest('SUBMIT_NEW_NOTE', submitNewNote);
}

export default createNote;
