import { combineReducers, createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import packages from '../components/Packages/reducer';
import information from '../components/Information/reducer';
import drinks from '../components/Drinks/reducer';

const reducres = combineReducers({
  packages,
  information,
  drinks
});

const store = createStore(reducres, composeWithDevTools(applyMiddleware(thunk)));

export default store;

