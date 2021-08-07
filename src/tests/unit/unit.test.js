import { getWords } from "../../modules/thunks";
import axios from "axios";
import * as actions from "../../modules/actions";
import { deleteOneWord } from "../../modules/thunks";

jest.mock("axios");
describe("getWords thunk test", () => {
  describe("dispatch getWords", () => {
    beforeEach(() => {
      const data = [
        {
          word: "Korea",
          meaning: "Seoul",
        },
        {
          word: "Korea",
          meaning: "Seoul",
        },
        {
          word: "Korea",
          meaning: "Seoul",
        },
      ];
      axios.get.mockResolvedValue(data);
    });
    it("dispatch getWords actions", async () => {
      const dispatch = jest.fn();
      await getWords()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(getWordsAction());
    });
  });

  describe("dispatch getWords success", () => {
    const res = {
      data: [
        {
          word: "Korea",
          meaning: "Seoul",
        },
        {
          word: "Korea",
          meaning: "Seoul",
        },
        {
          word: "Korea",
          meaning: "Seoul",
        },
      ],
    };
    beforeEach(() => {
      axios.get.mockResolvedValue(res);
    });
    it("dispatch getWords actions", async () => {
      const dispatch = jest.fn();
      await getWords()(dispatch);
      expect(dispatch).toHaveBeenLastCalledWith(
        getWordsSuccessAction(res.data)
      );
    });
  });

  describe("dispatch getWords fail", () => {
    const error = new Error("My Error");
    beforeEach(() => {
      axios.get.mockRejectedValue(error);
    });
    it("dispatch getWords actions", async () => {
      const dispatch = jest.fn();
      await getWords()(dispatch);
      expect(dispatch).toHaveBeenLastCalledWith(getWordsErrorAction(error));
    });
  });
});

describe("Delete thunk", () => {
  const dispatch = jest.fn();
  it("delete on 액션 생성 함수", () => {
    const expected = {
      type: actions.DELETE_ONE_WORD,
      payload: 1,
    };
    expect(deleteOneWord(1)).toStrictEqual(expected);
  });

  it("deleteOne Thunk", () => {
    deleteOneWord()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
  });

  it("deleteOne Thunk axios delete success", async () => {
    axios.delete.mockResolvedValue(true);
    const id = 1;
    await deleteOneWord(id)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(actions.deleteOneWordAction(id));
  });

  it("deleteOneWord thunk failure", async () => {
    const error = new Error("Error");
    axios.delete.mockRejectedValue(error);
    const id = 1;
    await deleteOneWord(id)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.errorAction(error));
  });
});
