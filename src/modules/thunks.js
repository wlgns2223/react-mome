import * as actions from "./actions";
import axiosInstance from "../utils/asyncUtils";

export const getWords = () => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axiosInstance.get();
    dispatch(actions.successAction());
    dispatch(actions.getWordsSuccessAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const deleteOneWord = (id) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axiosInstance.delete(`/${id}`, { id });
    dispatch(actions.successAction());
    dispatch(actions.deleteOneWordAction(payload));
  } catch (e) {
    console.log(e);
    dispatch(actions.errorAction(e));
  }
};

export const addOneWord = (word) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axiosInstance.post("/", word);
    dispatch(actions.successAction());
    dispatch(actions.addOneWordAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};

export const updateOneWord = (id, word) => async (dispatch) => {
  dispatch(actions.requestAction());
  try {
    const payload = await axiosInstance.patch(`/${id}`, word);
    dispatch(actions.successAction());
    dispatch(actions.updateOneWordAction(payload));
  } catch (e) {
    dispatch(actions.errorAction(e));
  }
};
