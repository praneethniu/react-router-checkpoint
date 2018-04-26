import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const logger = createLogger({
    collapsed: true,
    diff: true
})

export default (initialState) => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger, thunkMiddleware))
    );
}
