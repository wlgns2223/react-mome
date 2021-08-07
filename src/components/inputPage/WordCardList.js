import React from "react";
import styled from "styled-components";
import WordCard from "./WordCard";

export default function WordCardList({ words, onDelete }) {
  return (
    <>
      <List>
        {words.map((word, index) => (
          <li key={index}>
            <WordCard word={word} onDelete={onDelete} />
          </li>
        ))}
      </List>
      <NumberOfWords>총 3단어</NumberOfWords>
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
  height: calc(100vh - 200px);
  max-height: 530px;

  li + li {
    margin-top: 1rem;
  }
`;
