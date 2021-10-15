import { all } from 'redux-saga/effects';
import createNote from './createNote.saga';

export default function* rootSaga() {
    yield all([createNote()]);
}
