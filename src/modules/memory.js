import axios from "axios";

const ADD_WORD = "memory/ADD_WORD";
const DELETE_WORD = "memory/DELETE_WORD";

const getInitialState = async () => {
  const res = await axios.get("http://localhost:3001/word");
  return res.data;
};

const initialState = [
  {
    id: 1,
    name: "Korea",
    meaning: "Seoul",
  },
  {
    id: 2,
    name: "Japan",
    meaning: "Tokyo",
  },
  {
    id: 3,
    name: "China",
    meaning: "Beijing",
  },
];

let nextId = 4;

export const addWord = (data) => ({
  type: ADD_WORD,
  word: {
    id: nextId++,
    name: data.name,
    meaning: data.meaning,
  },
});

export const deleteWord = (id) => ({
  type: DELETE_WORD,
  id: id,
});

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
