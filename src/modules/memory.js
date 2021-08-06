import axios from "axios";

const initialState = {
  words: {
    loading: false,
    data: null,
    error: null,
  },
  word: {
    loading: false,
    data: null,
    error: null,
  },
};

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

export const getWordsError = (error) => ({
  type: GET_WORDS_ERROR,
  error,
});

const apiUrl = "http:/localhost:3001/word";
export const getWords = () => async (dispatch) => {
  dispatch({ type: GET_WORDS });
  try {
    const res = await axios.get(apiUrl);
    dispatch({ type: GET_WORDS_SUCCESS, data: res.data });
  } catch (e) {
    dispatch({ type: GET_WORDS_ERROR, error: e });
  }
};

let nextId = 4;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WORD:
      return state.concat(action.word);
    case DELETE_WORD:
      return state.filter((word) => word.id != action.id);
    default:
      return { ...state };
  }
}
