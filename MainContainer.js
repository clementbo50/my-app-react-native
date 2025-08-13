import { connect } from "react-redux";
import Main from "./Main";
import { fetchMovies } from "./src/redux/movies/Actions";

const mapStateToProps = (state) => ({
    movies: state.movie.movies,


})

const mapDispatchToProps = (dispatch) => ({
    onFetchMovies: (term) => dispatch(fetchMovies(term)),

})
/* il ne reste plus qu'a brancher nos composants à la méthode connect, ewlle prend en entré deux paramètre la première est une fn qui définit les propriétés de notre state
que le l'on va asigné au props de notre composant, la deuxième conçerne les actions que l'on va transmetre à notre composant */
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);


export default MainContainer;
