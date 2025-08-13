/* l'action est ensuite intercepté par le reducer, c'est une grande fonction qui prends en entré l'état de l'application, 
et l'action qui vient d'etre intercepté, on vient ensuite mettre à jour l'etat de notre application */
import { RECEIVE_MOVIES } from "./ActionTypes";

const initialState = {
    movies: []
};

const receiveMovies = (state, movies) => ({
    ...state,
    movies,
});




export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_MOVIES:
            return receiveMovies(state, action.movies);
        default:
            return state;
    }
}