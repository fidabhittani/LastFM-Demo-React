/**
 * Application redux store with configured middlewares and reducers.
 */

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "reducers";
import thunkMiddleware from "redux-thunk";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const dispatch = store.dispatch;

export default store;
