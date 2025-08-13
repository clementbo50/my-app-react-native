import { all } from 'redux-saga/effects';
import movieSagas from './movies/Sagas'

export function* rootSagas() {
    yield all([
        ...movieSagas
    ])
}