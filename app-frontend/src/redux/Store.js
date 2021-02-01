import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer"
import {compose, composeWithDevTools} from 'redux-devtools-extension';



const middleware = [thunk];



const store = createStore(
    authReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;