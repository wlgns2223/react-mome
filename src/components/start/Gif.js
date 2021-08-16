import React, { useState } from "react";
import { useAsync } from "react-async-hook";
import styled from "styled-components";
import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import key from "../../keyconfig.json";

export default function ResultGif({ wordsLen, inputs }) {
  const giphyFetch = new GiphyFetch(key.giphy);
  const [gif, setgif] = useState(null);
  const limit = 5;
  useAsync(async () => {
    const term = getSearchTermAccordingToScore(wordsLen, inputs);
    const res = await giphyFetch.search(term, { limit });
    const data = res.data[getRandomGifIndex(limit)];
    setgif(data);
  }, []);

  return gif && <Gif gif={gif} width={350} />;
}

const getRandomGifIndex = (limit) => {
  return Math.floor(Math.random() * limit);
};

const getSearchTermAccordingToScore = (wordsLen, inputs) => {
  const numOfCorrectAnswer = inputs.filter((input) => input.correct).length;
  const score = (numOfCorrectAnswer / wordsLen) * 100;
  const searchTerms = ["good", "soso", "bad"];
  if (score >= 60) {
    return searchTerms[0];
  }
  if (score > 30) {
    return searchTerms[1];
  }
  return searchTerms[2];
};

const Container = styled.div`
  position: absolute;
  top: 9rem;
  margin: 0 1rem;
`;
