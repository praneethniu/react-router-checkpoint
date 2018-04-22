import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


export default (initialState) => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger, thunkMiddleware))
    );
}
