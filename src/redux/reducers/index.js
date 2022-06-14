

import { combineReducers } from 'redux';

import filters from './filters';
import dress from './dress';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    dress,
    cart,
});

export default rootReducer;