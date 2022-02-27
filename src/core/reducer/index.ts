import { combineReducers } from "redux";

import FavoritePoemReducer from "./FavoritePoemReducer";
import PoemReducer from "./PoemReducer";

const rootReducer = combineReducers({ PoemReducer, FavoritePoemReducer });

export default rootReducer;
