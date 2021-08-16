import React, { useEffect } from "react";
import StartContainer from "./StartContainer";
import EmptyWordsMessage from "../inputPage/EmptyWordsMessage";
import { useDispatch, useSelector } from "react-redux";
import * as thunks from "../../modules/thunks";

export default function Start() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.getWords());
  }, [dispatch]);
  const { words } = useSelector((state) => state.reducer);

  const isEmptyWords = Array.isArray(words) && words.length === 0;

  return isEmptyWords ? <EmptyWordsMessage /> : <StartContainer />;
}
