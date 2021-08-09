import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import WordCard from "./WordCard";

export default function WordCardList({ words, onDelete, onUpdate }) {
  const listRef = useRef();

  useEffect(() => {
    const scrollDown = () => {
      if (listRef.current.lastChild) {
        listRef.current.lastChild.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    };

    scrollDown();
  }, [words]);

  return (
    <>
      <List ref={listRef}>
        {words.map((word) => (
          <li key={word.id}>
            <WordCard word={word} onDelete={onDelete} onUpdate={onUpdate} />
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
  height: calc(100vh - 350px);
  max-height: 530px;
  overflow-y: scroll;

  li + li {
    margin-top: 1rem;
  }
`;
