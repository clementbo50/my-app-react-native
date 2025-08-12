import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import MovieReducer from './src/redux/movies/reducer';
import MainContainer from './MainContainer';

const store = createStore(
  combineReducers({
    movie: MovieReducer,
  })
)


export default function App() {

  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
