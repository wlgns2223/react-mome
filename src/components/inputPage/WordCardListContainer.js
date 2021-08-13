import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import WordCardList from "./WordCardList";
import * as thunks from "../../modules/thunks";

export default function WordCardListContainer() {
  const { loading, words, error } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.getWords());
  }, [dispatch]);

  const onDelete = useCallback(
    (id) => {
      dispatch(thunks.deleteOneWord(`/${id}`, { id }));
    },
    [dispatch]
  );

  const onUpdate = useCallback(
    (id, word) => {
      dispatch(thunks.updateOneWord(`/${id}`, word));
    },
    [dispatch]
  );

  return words ? (
    <WordCardList words={words} onDelete={onDelete} onUpdate={onUpdate} />
  ) : null;
}
