import { SHOW_LOADING } from "../actionType/index";
const initialState: boolean = false;

const LoadReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  const { payload, type } = action;

  switch (type) {
    case SHOW_LOADING:
      return payload;
    default:
      return state;
  }
};

export default LoadReducer;
