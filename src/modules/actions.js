// 여러개의 단어들에 대한 액션
export const GET_WORDS = "GET_WORDS";
export const GET_WORDS_SUCCESS = "GET_WORDS_SUCCESS";
export const GET_WORDS_ERROR = "GET_WORDS_ERROR";

export const getWordsAction = () => ({
  type: GET_WORDS,
});

export const getWordsSuccessAction = (data) => ({
  type: GET_WORDS_SUCCESS,
  data,
});

export const getWordsErrorAction = (error) => ({
  type: GET_WORDS_ERROR,
  error,
});
