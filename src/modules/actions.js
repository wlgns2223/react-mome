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

export const getWordsSuccessAction = (data) => ({
  type: GET_WORDS,
  payload: data,
});

export const deleteOneWordAction = (id) => ({
  type: DELETE_ONE_WORD,
  payload: id,
});

export const addOneWordAction = (word) => ({
  type: ADD_ONE_WORD,
  payload: word,
});

export const updateOneWordAction = (word) => ({
  type: UPDATE_ONE_WORD,
  payload: word,
});
