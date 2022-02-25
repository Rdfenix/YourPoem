import { Poem } from "../../shared/interface/poem";
import { FETCH_POEMS } from "../actionType";

const initialState: Poem[] = [];

const PoemReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POEMS:
      return payload;
    default:
      return state;
  }
};

export default PoemReducer;
