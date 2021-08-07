import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WordCardList from "./WordCardList";
import { getWords, deleteOneWord } from "../../modules/thunks";

export default function WordCardListContainer() {
  const { loading, words, error } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWords());
  }, []);
  const onDelete = (id) => {
    dispatch(deleteOneWord(id));
  };

  return words ? <WordCardList words={words} onDelete={onDelete} /> : null;
}
