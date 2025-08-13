import { put, takeEvery } from "redux-saga/effects";
import { FETCH_MOVIES } from "./ActionTypes";
import { search } from "../../api";
import { receiveMovies } from "./Actions";

export function* fetchMovieSaga({searchTerm}) {
    const movies = yield search(searchTerm).then(response => response.data)
    yield(put(receiveMovies(movies)))
}

export default [
    takeEvery(FETCH_MOVIES, fetchMovieSaga)
]