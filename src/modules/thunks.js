import * as actions from "./actions";
import axiosInstance from "../utils/asyncUtils";
import { createThunkFunction } from "../utils/thunkUtils";

export const getWords = createThunkFunction(
  actions.getWordsSuccessAction,
  axiosInstance.get
);

export const deleteOneWord = createThunkFunction(
  actions.deleteOneWordAction,
  axiosInstance.delete
);

export const addOneWord = createThunkFunction(
  actions.addOneWordAction,
  axiosInstance.post
);

export const updateOneWord = createThunkFunction(
  actions.updateOneWordAction,
  axiosInstance.patch
);
