import {createStore,applyMiddleware} from 'redux';
import state from './state';
import reducer from './reducer';
import thunk from 'redux-thunk';


let store=createStore(
reducer,
state,
applyMiddleware(thunk)

)

console.log(store.getState());
export default store;