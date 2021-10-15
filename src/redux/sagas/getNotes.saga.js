import { put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';

function* getAllNotes(action) {
    try {
        const notes = yield axios.get('/notes');
        yield put({ type: 'SET_ALL_NOTES', payload: notes.data });
    } catch (error) {
        console.log(`error GETing all notes: ${error}`);
    }
}

function* getNotes() {
    yield takeLatest('GET_ALL_NOTES', getAllNotes);
}

export default getNotes;
