import { combineReducers } from 'redux';
import productReducer from './productReducer';

const prodApp = combineReducers({
    productReducer: productReducer
})

export default prodApp;