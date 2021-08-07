import { REQUEST, ERROR, GET_WORDS, DELETE_ONE_WORD } from "./actions";

const initialState = {
  words: [],
  word: null,
  loading: null,
  error: null,
};

let nextId = 4;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case DELETE_ONE_WORD:
      return {
        ...state,
        words: state.words.filter((word) => word.id !== action.payload),
      };

    default:
      return { ...state };
  }
}
