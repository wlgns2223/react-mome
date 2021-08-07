import { getWords } from "../../modules/thunks";
import axios from "axios";
import {
  getWordsAction,
  getWordsSuccessAction,
  getWordsErrorAction,
} from "../../modules/actions";

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
