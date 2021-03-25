import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import cardsReducer from './cards-reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
	cards: cardsReducer
})

//Chrome-extension (REDUX)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;