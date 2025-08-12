/* l'action est ensuite intercepté par le reducer, c'est une grande fonction qui prends en entré l'état de l'application, 
et l'action qui vient d'etre intercepté, on vient ensuite mettre à jour l'etat de notre application */
import { CLEAR_MOVIES, RECEIVE_MOVIE } from "./ActionTypes";

const initialState = {
    movies: []
};

const receiveMovie = (state, movie) => ({
    ...state,
    movies: [...state.movies, movie]
});

const clearMovies = (state) => ({
    ...state,
    movies: []
});


export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_MOVIE:
            return receiveMovie(state, action.movie);
        case CLEAR_MOVIES:
            return clearMovies(state);
        default:
            return state;
    }
}