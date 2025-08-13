import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import MovieReducer from './src/redux/movies/Reducer';
import MainContainer from './MainContainer';
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from './src/redux/rootSagas';


const sagaMiddleware = createSagaMiddleware();

/* Branchage du reducer à notre application en créant le store */
const store = createStore(
  /* Il pourrais y avoir à l'avenir d'autre reducer la méthode combineReducers est la pour ça */
  combineReducers({
    movie: MovieReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);


export default function App() {
/* Pour injecter le store dans notre application on utilise un provider qui englobe cette dernière */
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
