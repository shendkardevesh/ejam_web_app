import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from '../reducers/index';

const middlware = [ promise, thunk ];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlware
})

export {
  store
};
