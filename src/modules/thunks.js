import axios from "axios";
import * as actions from "./actions";

const apiUrl = "http://localhost:3001/words/";
export const getWords = () => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axios.get(apiUrl);
    dispatch(actions.successAction());
    dispatch(actions.getWordsSuccessAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const deleteOneWord = (id) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axios.delete(apiUrl + id, { id });
    dispatch(actions.successAction());
    dispatch(actions.deleteOneWordAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const addOneWord = (word) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axios.post(apiUrl, word);
    dispatch(actions.successAction());
    dispatch(actions.addOneWordAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const updateOneWord = (id, word) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axios.put(apiUrl + id, word);
    dispatch(actions.successAction());
    dispatch(actions.updateOneWordAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};
