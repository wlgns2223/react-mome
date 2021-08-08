import * as actions from "./actions";

const initialState = {
  words: [],
  word: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actions.GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case actions.DELETE_ONE_WORD:
      return {
        ...state,
        words: state.words.filter((word) => word.id !== action.payload),
      };
    case actions.ADD_ONE_WORD:
      return {
        ...state,
        words: state.words.concat(action.payload),
      };

    default:
      return { ...state };
  }
}
