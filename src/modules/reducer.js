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
        words: action.payload.data,
      };
    case actions.DELETE_ONE_WORD:
      return {
        ...state,
        words: state.words.filter(
          (word) => word.id !== action.payload.config.id
        ),
      };
    case actions.ADD_ONE_WORD:
      return {
        ...state,
        words: state.words.concat(action.payload.data),
      };
    case actions.UPDATE_ONE_WORD:
      const id = action.payload.id;
      return {
        ...state,
        words: state.words.map((word) =>
          word.id === id
            ? {
                ...action.payload.data,
              }
            : word
        ),
      };

    default:
      return { ...state };
  }
}
