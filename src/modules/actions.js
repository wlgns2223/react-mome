// 여러개의 단어들에 대한 액션
export const REQUEST = "REQUEST";
export const ERROR = "ERROR";
export const GET_WORDS = "GET_WORDS";
export const DELETE_ONE_WORD = "DELETE_ONE_WORD";

export const requestAction = () => ({
  type: REQUEST,
});

export const errorAction = (error) => ({
  type: ERROR,
  error,
});

export const getWordsSuccessAction = (data) => ({
  type: GET_WORDS_SUCCESS,
  payload: data,
});

export const deleteOneWordAction = (id) => ({
  type: DELETE_ONE_WORD,
  payload: id,
});
