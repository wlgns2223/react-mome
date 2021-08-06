import { getWords, GET_WORDS } from "../../modules/memory";

describe("redux thunk test", () => {
  it("getWord", async () => {
    const dispatch = jest.fn();
    await getWords()(dispatch);
    expect(getWords()).to;
  });
});
