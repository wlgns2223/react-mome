import React, { useState } from "react";
import { useSelector } from "react-redux";
import WordNameCard from "./WordNameCard";

export default function StartContainer() {
  const { words } = useSelector((state) => state.reducer);
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState([]);

  const onAppendInput = (answer) => {
    setInputs(inputs.concat(answer));
  };
  const onSetIndex = () => {
    if (index + 1 < words.length) {
      setIndex(index + 1);
    }
  };

  return (
    <WordNameCard
      word={words[index]}
      onAppendInput={onAppendInput}
      onSetIndex={onSetIndex}
    />
  );
}
