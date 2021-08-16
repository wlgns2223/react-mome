import React, { useState } from "react";
import { useSelector } from "react-redux";
import WordNameCard from "./WordNameCard";
import styled from "styled-components";
import ResultGif from "./Gif";
import { useAsync } from "react-async-hook";
import Score from "./Score";

export default function StartContainer() {
  const { words } = useSelector((state) => state.reducer);
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [end, setEnd] = useState(false);
  useAsync(async () => {
    await delay();
    setEnd(isEnd(inputs, words));
  }, [inputs, words]);

  const onAppendInput = (answer) => {
    if (inputs.length < words.length) {
      setInputs(inputs.concat(answer));
    }
  };
  const onSetIndex = () => {
    if (index + 1 < words.length) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <ProgressBarContainer>
        <Progress wordsLen={words.length} inputsLen={inputs.length} />
      </ProgressBarContainer>
      {end ? (
        <Score wordsLen={words.length} inputs={inputs} />
      ) : (
        <WordNameCard
          word={words[index]}
          onAppendInput={onAppendInput}
          onSetIndex={onSetIndex}
        />
      )}
    </>
  );
}

const setProgress = (wordsLen, inputsLen) => {
  return (100 / wordsLen) * inputsLen;
};

const delay = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 1500));
};

const isEnd = (inputs, words) => {
  return inputs.length === words.length;
};

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 0.75rem;
  background-color: transparent;
  position: absolute;
  top: 0;
`;
const Progress = styled.div`
  width: ${({ wordsLen, inputsLen }) => `${setProgress(wordsLen, inputsLen)}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.mint};
`;
