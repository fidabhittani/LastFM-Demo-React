import { combineReducers } from "redux";

/**
 *  Create a combine reducers
 */
import app from "reducers/app";
import data from "reducers/data";

export default combineReducers({ app, data });
