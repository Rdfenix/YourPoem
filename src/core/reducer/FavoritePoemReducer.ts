import { Poem } from "../../shared/interface/poem";
import { GET_FAVORITE_POEMS } from "../actionType/index";

const initialState: Poem[] = [];

const FavoritePoemReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FAVORITE_POEMS:
      return payload;
    default:
      return state;
  }
};

export default FavoritePoemReducer;
