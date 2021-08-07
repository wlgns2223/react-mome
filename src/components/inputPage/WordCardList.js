import React from "react";
import styled from "styled-components";
import WordCard from "./WordCard";

export default function WordCardList({ words }) {
  return (
    <>
      <List>
        {words.map((word) => (
          <li key={word.id}>
            <WordCard word={word} />
          </li>
        ))}
      </List>
      {/* <NumberOfWords>총 3단어</NumberOfWords> */}
    </>
  );
}
const NumberOfWords = styled.div`
  text-align: center;
  padding-top: 0.85rem;
  font-size: 1.25rem;
`;

const List = styled.ul`
  width: 100%;
  height: 100vh;
  max-height: 530px;

  li + li {
    margin-top: 1rem;
  }
`;
