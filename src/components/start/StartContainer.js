import React, { useState } from "react";
import Controller from "./Controller";
import WordNameCard from "./WordNameCard";
import { useSelector } from "react-redux";
import EmptyWordsMessage from "../inputPage/EmptyWordsMessage";

export default function StartContainer() {
  const { words } = useSelector((state) => state.reducer);
  const [index, setIndex] = useState(0);
  const isEmptyWords = Array.isArray(words) && words.length === 0;
  console.log("words", words);
  console.log("index", index);

  const goForward = () => {
    if (index + 1 < words.length) {
      setIndex(index + 1);
    }
  };

  const goBackward = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <WordNameCard word={words[index]} />
      <Controller goForward={goForward} goBackward={goBackward} />
    </>
  );
}
