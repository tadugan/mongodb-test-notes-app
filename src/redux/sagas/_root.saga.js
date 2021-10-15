import { all } from 'redux-saga/effects';
import createNote from './createNote.saga';
import getNotes from './getNotes.saga';

export default function* rootSaga() {
    yield all([createNote(), getNotes()]);
}
