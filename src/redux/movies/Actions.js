/* Deuxième brique les actions, ce sont des object comportant les propriété de l'action, la propriété type est obligatoire */
import { FETCH_MOVIES, RECEIVE_MOVIES } from "./ActionTypes";

export const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies
});

export const fetchMovies = (searchTerm) => ({
    type: FETCH_MOVIES,
    searchTerm
});