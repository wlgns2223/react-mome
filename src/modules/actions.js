// 여러개의 단어들에 대한 액션
export const REQUEST = "REQUEST";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";
export const GET_WORDS = "GET_WORDS";
export const DELETE_ONE_WORD = "DELETE_ONE_WORD";
export const ADD_ONE_WORD = "ADD_ONE_WORD";
export const UPDATE_ONE_WORD = "UPDATE_ONE_WORD";

export const requestAction = () => ({
  type: REQUEST,
});

export const errorAction = (error) => ({
  type: ERROR,
  error,
});

export const successAction = () => ({
  type: SUCCESS,
});

export const getWordsSuccessAction = (payload) => ({
  type: GET_WORDS,
  payload,
});

export const deleteOneWordAction = (payload) => ({
  type: DELETE_ONE_WORD,
  payload,
});

export const addOneWordAction = (payload) => ({
  type: ADD_ONE_WORD,
  payload,
});

export const updateOneWordAction = (payload) => ({
  type: UPDATE_ONE_WORD,
  payload,
});
