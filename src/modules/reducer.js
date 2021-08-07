import { GET_WORDS, GET_WORDS_ERROR, GET_WORDS_SUCCESS } from "./actions";

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

let nextId = 4;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        words: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_WORDS_SUCCESS:
      return {
        ...state,
        words: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_WORDS_ERROR:
      return {
        ...state,
        words: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return { ...state };
  }
}
