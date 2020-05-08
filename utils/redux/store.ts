import {applyMiddleware, combineReducers, createStore} from 'redux'
import mainReducer from './reducer'
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    mainReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
