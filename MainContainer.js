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

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);


export default MainContainer;
