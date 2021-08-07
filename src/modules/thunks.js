import axios from "axios";
import {
  getWordsAction,
  getWordsSuccessAction,
  getWordsErrorAction,
} from "./actions";

const apiUrl = "http://localhost:3001/word/";
export const getWords = () => async (dispatch) => {
  dispatch(getWordsAction());
  try {
    const res = await axios.get(apiUrl);
    dispatch(getWordsSuccessAction(res.data));
  } catch (error) {
    dispatch(getWordsErrorAction(error));
  }
};
