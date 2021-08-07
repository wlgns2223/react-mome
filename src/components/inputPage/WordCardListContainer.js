import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WordCardList from "./WordCardList";
import { getWords } from "../../modules/thunks";

export default function WordCardListContainer() {
  const { loading, data, error } = useSelector((state) => state.reducer.words);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWords());
  }, []);

  return data ? <WordCardList words={data} /> : null;
}
