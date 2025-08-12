import { connect } from "react-redux";
import Main from "./Main";
import { clearMovies, receiveMovie } from "./src/redux/movies/Actions";

const mapStateToProps = (state) => ({
    movies: state.movie.movies,


})

const mapDispatchToProps = (dispatch) => ({
    onReceiveMovie: (movie) => dispatch(receiveMovie(movie)),
    onClearMovies: () => dispatch(clearMovies()),
})
/* il ne reste plus qu'a brancher nos composants à la méthode connect, elle prend en entré deux paramètre la première est une fn qui définit les propriétés de notre state
que le l'on va asigné au props de notre composant, la deuxième conçerne les actions que l'on va transmetre à notre composant */
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);


export default MainContainer;
