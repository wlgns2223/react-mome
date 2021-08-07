import axios from "axios";
import * as actions from "./actions";

const apiUrl = "http://localhost:3001/words/";
export const getWords = () => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const res = await axios.get(apiUrl);
    dispatch(actions.getWordsSuccessAction(res.data));
  } catch (error) {
    dispatch(actions.errorAction(error));
  }
};

export const deleteOneWord = (id) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    await axios.delete(apiUrl + id);
    dispatch(actions.deleteOneWordAction(id));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};
