import { getWords } from "../../modules/thunks";
import axios from "axios";
import * as actions from "../../modules/actions";
import * as thunks from "../../modules/thunks";
import axiosInstance from "../../utils/asyncUtils";
import { createThunkFunction } from "../../utils/thunkUtils";

// jest.mock("axios");
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
    expect(thunks.deleteOneWord(1)).toStrictEqual(expected);
  });

  it("deleteOne Thunk", () => {
    thunks.deleteOneWord()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
  });

  it("deleteOne Thunk axios delete success", async () => {
    axios.delete.mockResolvedValue(true);
    const id = 1;
    await thunks.deleteOneWord(id)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.thunks.deleteOneWordAction(id)
    );
  });

  it("thunks.deleteOneWord thunk failure", async () => {
    const error = new Error("Error");
    axios.delete.mockRejectedValue(error);
    const id = 1;
    await thunks.deleteOneWord(id)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.errorAction(error));
  });
});

describe("addOneWord thunk test", () => {
  const dispatch = jest.fn();
  const res = {
    data: {
      name: "Hungary",
      meaning: "Budapest",
    },
  };
  const word = {
    name: "Hungary",
    meaning: "Budapest",
  };
  it("addOneWord action함수는 정확한 액션을 반환한다.", () => {
    const expected = {
      type: actions.ADD_ONE_WORD,
      payload: word,
    };

    expect(actions.addOneWordAction(word)).toStrictEqual(expected);
  });

  it("thunk request", async () => {
    await thunks.addOneWord()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
  });

  it("addOneWord post success", async () => {
    axios.post.mockResolvedValue(res);
    await thunks.addOneWord(word)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.addOneWordAction(res.data)
    );
  });

  it("addOneWord post failure", async () => {
    const error = new Error("my Error");
    axios.post.mockRejectedValue(error);
    await thunks.addOneWord(word)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(actions.errorAction(error));
  });
});

describe("update thunk", () => {
  const word = {
    name: "newName",
    meaning: "newMeaning",
  };
  const id = 1;
  const dispatch = jest.fn();
  it("update action", () => {
    const expected = {
      type: actions.UPDATE_ONE_WORD,
      payload: word,
    };
    expect(actions.updateOneWordAction(word)).toStrictEqual(expected);
  });

  it("updateOneWord thunk success", async () => {
    const res = {
      data: word,
    };

    axios.put.mockResolvedValue(res);
    await thunks.updateOneWord(id, word)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
    expect(dispatch).toHaveBeenCalledWith(actions.successAction());
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.updateOneWordAction(res.data)
    );
  });

  it("updateOneWord thunk fail", async () => {
    const error = new Error("My Error");
    axios.put.mockRejectedValue(error);
    await thunks.updateOneWord(id, word)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(actions.errorAction(error));
  });
});

describe("thunk test", () => {
  const payload = {
    data: {
      words: [
        {
          id: 1,
          name: "test",
          meaning: "test",
        },
      ],
    },
  };

  const dispatch = jest.fn();

  it("getWordsSuccessAction", () => {
    const expected = {
      type: actions.GET_WORDS,
      payload,
    };
    expect(actions.getWordsSuccessAction(payload)).toStrictEqual(expected);
  });

  it("getWords thunk dispatch test", async () => {
    axios.get.mockResolvedValue(payload);
    await thunks.getWords()(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.getWordsSuccessAction(payload)
    );
  });

  it("deleteOneWord thunk dispatch test", async () => {
    const payload = {
      data: {},
    };
    const id = 1;
    axios.delete.mockResolvedValue(payload);
    await thunks.deleteOneWord(id)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.deleteOneWordAction(payload)
    );
  });

  it("addOneWord test", async () => {
    axios.post.mockResolvedValue(payload);
    await thunks.addOneWord()(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.addOneWordAction(payload)
    );
  });

  it("updateOneWord test", async () => {
    axios.put.mockResolvedValue(payload);
    await thunks.updateOneWord()(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(
      actions.updateOneWordAction(payload)
    );
  });
});

describe("thunk creator test", () => {
  const payload = {
    data: {
      word: [{ name: "hello", meaning: "world" }],
    },
  };
  const error = new Error("My Error");
  const axiosInstance = jest.fn();
  const dispatch = jest.fn();

  describe("getWords thunk", () => {
    axiosInstance.get = jest.fn();
    const thunk = createThunkFunction(
      actions.getWordsSuccessAction,
      axiosInstance.get
    );
    it("request action test", async () => {
      await thunk()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
    });

    it("success action test", async () => {
      await thunk()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.successAction());
    });

    it("action function test", async () => {
      axiosInstance.get.mockResolvedValue(payload);
      await thunk()(dispatch);
      expect(dispatch).toHaveBeenLastCalledWith(
        actions.getWordsSuccessAction(payload)
      );
    });
    it("action function error", async () => {
      axiosInstance.get.mockRejectedValue(error);
      await thunk()(dispatch);
      expect(dispatch).toHaveBeenLastCalledWith(actions.errorAction(error));
    });
  });

  describe("deleteOneWord", () => {
    axiosInstance.delete = jest.fn();
    const deleteOneWord = createThunkFunction(
      actions.deleteOneWordAction,
      axiosInstance.delete
    );
    const id = 1;

    it("request", async () => {
      await deleteOneWord(id)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
    });

    it("success", async () => {
      axiosInstance.delete.mockResolvedValue(payload);
      await deleteOneWord(id, { id })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.successAction());
    });

    it("asyncCallback parameter", async () => {
      axiosInstance.delete.mockResolvedValue(payload);
      await deleteOneWord(id, { id })(dispatch);
      expect(axiosInstance.delete).toHaveBeenCalledWith(id, { id });
    });

    it("deleteOneWordAction", async () => {
      axiosInstance.delete.mockResolvedValue(payload);
      await deleteOneWord(id, { id })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(
        actions.deleteOneWordAction(payload)
      );
    });

    it("delete error", async () => {
      axiosInstance.delete.mockRejectedValue(error);
      await deleteOneWord(id, { id })(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.errorAction(error));
    });
  });

  describe("addOneWord", () => {
    axiosInstance.post = jest.fn();
    const addOneWord = createThunkFunction(
      actions.addOneWordAction,
      axiosInstance.post
    );
    const word = { name: "hello", meaning: "world" };

    it("request", async () => {
      await addOneWord("/", word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
    });

    it("axiosInstance parameter test", async () => {
      axiosInstance.post.mockResolvedValue(word);
      await addOneWord(word)(dispatch);
      expect(axiosInstance.post).toHaveBeenCalledWith(word);
    });

    it("success", async () => {
      axiosInstance.post.mockResolvedValue(word);
      await addOneWord("/", word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.successAction());
    });

    it("addOneWordAction", async () => {
      axiosInstance.post.mockResolvedValue(payload);
      await addOneWord("/", word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.addOneWordAction(payload));
    });

    it("error", async () => {
      axiosInstance.post.mockRejectedValue(error);
      await addOneWord("/", word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.errorAction(error));
    });
  });

  describe("updateOneWord", () => {
    axiosInstance.patch = jest.fn();
    const updateOneWord = createThunkFunction(
      actions.updateOneWordAction,
      axiosInstance.patch
    );
    const word = { name: "hello", meaning: "world" };
    const id = 1;

    it("request", async () => {
      axiosInstance.patch.mockResolvedValue(payload);
      await updateOneWord(id, word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.requestAction());
    });
    it("axiosInstance parameter ", async () => {
      axiosInstance.patch.mockResolvedValue(payload);
      await updateOneWord(id, word)(dispatch);
      expect(axiosInstance.patch).toHaveBeenCalledWith(id, word);
    });
    it("updateOneWordAction", async () => {
      axiosInstance.patch.mockResolvedValue(payload);
      await updateOneWord(id, word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(
        actions.updateOneWordAction(payload)
      );
    });

    it("error", async () => {
      axiosInstance.patch.mockRejectedValue(error);
      await updateOneWord(id, word)(dispatch);
      expect(dispatch).toHaveBeenCalledWith(actions.errorAction(error));
    });
  });
});
