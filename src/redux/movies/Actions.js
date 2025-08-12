/* Deuxième brique les actions, ce sont des object comportant les propriété de l'action, la propriété type est obligatoire */
import { CLEAR_MOVIES, RECEIVE_MOVIE } from "./ActionTypes";

export const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie
});

export const clearMovies = () => ({
    type: CLEAR_MOVIES,
})