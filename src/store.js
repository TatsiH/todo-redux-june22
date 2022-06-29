import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux'
import reducer from "./Reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;