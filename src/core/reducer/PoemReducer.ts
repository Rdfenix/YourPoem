import { Poem } from "../../shared/interface/poem";

const initialState: Poem[] = [];

const PoemReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default PoemReducer;
