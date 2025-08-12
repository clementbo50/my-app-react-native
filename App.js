import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import MovieReducer from './src/redux/movies/reducer';
import MainContainer from './MainContainer';

/* Branchage du reducer à notre application en créant le store */
const store = createStore(
  /* Il pourrais y avoir à l'avenir d'autre reducer la méthode combineReducers est la pour ça */
  combineReducers({
    movie: MovieReducer,
  })
)


export default function App() {
/* Pour injecter le store dans notre application on utilise un provider qui englobe cette dernière */
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
