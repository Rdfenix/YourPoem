import { combineReducers } from "redux";

import FavoritePoemReducer from "./FavoritePoemReducer";
import LoadReducer from "./LoadReducer";
import PoemReducer from "./PoemReducer";

const rootReducer = combineReducers({
  PoemReducer,
  FavoritePoemReducer,
  LoadReducer,
});

export default rootReducer;
