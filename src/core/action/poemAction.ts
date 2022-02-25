import { Poem } from "../../shared/interface/poem";
import { FETCH_POEMS, GET_POEMS } from "../actionType";

export const getNewPoemsAction = () => ({ type: GET_POEMS });
export const fetchPoemsAction = (payload: Poem[]) => ({
  type: FETCH_POEMS,
  payload,
});
