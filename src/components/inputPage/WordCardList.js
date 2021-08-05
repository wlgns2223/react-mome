import React from "react";
import styled from "styled-components";
import WordCard from "./WordCard";

export default function WordCardList() {
  return (
    <>
      <List>
        <li>
          <WordCard text="hello" />
        </li>
        <li>
          <WordCard text="bye" />
        </li>
        <li>
          <WordCard text="wow" />
        </li>
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
  height: 100vh;
  max-height: 530px;

  li + li {
    margin-top: 1rem;
  }
`;
