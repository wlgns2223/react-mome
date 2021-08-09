import axios from "axios";
import * as actions from "./actions";

const apiUrl = "http://localhost:3001/words/";
export const getWords = () => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const res = await axios.get(apiUrl);
    dispatch(actions.successAction());
    dispatch(actions.getWordsSuccessAction(res.data));
  } catch (error) {
    dispatch(actions.errorAction(error));
  }
};

export const deleteOneWord = (id) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    await axios.delete(apiUrl + id);
    dispatch(actions.successAction());
    dispatch(actions.deleteOneWordAction(id));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const addOneWord = (word) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const res = await axios.post(apiUrl, word);
    dispatch(actions.successAction());
    dispatch(actions.addOneWordAction(res.data));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const updateOneWord = (id, word) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const res = await axios.put(apiUrl + id, word);
    dispatch(actions.successAction());
    dispatch(actions.updateOneWordAction(res.data));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};
